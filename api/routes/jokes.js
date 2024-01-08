const router = require('express').Router()
const Jokes = require("../models/jokes")
const NotFoundError = require('../utils/NotFoundError')

router.get("/", (req, res, next) => {
    Jokes.find({})
        .then(jokes => res.json(jokes))
        .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Jokes.findById(req.params.id).then(joke => {
        if (joke) {
            res.json(joke)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Jokes.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
            res.json(result)
        } else {
            throw new NotFoundError()
        }
    })
        .catch(err => next(err))
});

// Insert one
router.post("/", (req, res, next) => {
    const body = req.body
    // Check body
    const errorMessages = []
    if (!body.question || body.question.length < 3) {
        errorMessages.push("Question must be present and have at least 3 characters");
    }
    if (!body.answer || body.answer.length < 3) {
        errorMessages.push("Answer must be present and have at least 3 characters");
    }
    if (!body.category || body.category.length < 3) {
        errorMessages.push("Category must be present and have at least 3 characters");
    }
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages })
        return
    }
    // Check existing
    Jokes.find({ question: body.question }).then(joke => {
        if (joke && joke.length > 0) {
            errorMessages.push("question must be unique")
            res.status(422).json({ errorMessages })
        } else {
            // Insert
            const joke = new Jokes(body)
            joke.save().then(result => {
                res.json(result)
            })
                .catch(err => next(err))
        }
    })
        .catch(err => next(err))
})
module.exports = router
