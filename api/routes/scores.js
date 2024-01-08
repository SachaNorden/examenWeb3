const Scores = require("../models/scores");
const Jokes = require("../models/jokes");
const router = require('express').Router()

router.get("/", (req, res, next) => {
    Scores.find({})
        .then(scores => res.json(scores))
        .catch(err => next(err))
})

// Insert one
router.post("/", async(req, res, next) => {
    const body = req.body
    try {
        // Check body
        const errorMessages = []
        if (!body.username || body.username.length < 3) {
            errorMessages.push("Username must be present and have at least 3 characters");
        }
        if (!body.date) errorMessages.push("Date must be present")
        if (!body.score) errorMessages.push("score must be present");
        if (errorMessages.length > 0) {
            res.status(422).json({errorMessages})
            return
        }
        // Check existing
        const existingJoke = await Jokes.findById(body.joke);
        if (!existingJoke) {
            errorMessages.push("Associated joke does not exist");
            res.status(422).json({ errorMessages });
        } else {
            const existingScore = await Scores.findOne({username: body.username, joke: body.joke});

            if (existingScore) {
                errorMessages.push("User has already submitted a score for this joke");
                res.status(422).json({errorMessages});
            } else {
                // Insert
                const score = new Scores(body);
                const result = await score.save();
                res.json(result);
            }
        }
    }catch(err) {
        next(err);
    }
})
module.exports = router
