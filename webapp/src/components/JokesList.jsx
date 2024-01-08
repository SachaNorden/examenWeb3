import React, { useContext } from 'react';
import { JokesContext } from '../contexts/JokesContext';
import {Link} from 'react-router-dom';

const JokesList = () => {
  const { jokes } = useContext(JokesContext);

  return (
    <div>
      <h2>Liste des Blagues</h2>
      <ul>
        {jokes.map(joke => (
          <li key={joke.id}>
          <Link key={joke.id} to={`/jokes/${joke.id}`}>
            <strong>Question:</strong> {joke.question}<br/>
          </Link>
            <strong>Réponse:</strong> {joke.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokesList;
