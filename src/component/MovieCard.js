import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} />
        <p>Rating: {movie.rating}</p>
        <p>Description: {movie.description}</p>
        <Link to={'description/'+movie.id } >trailer</Link>
      </div>
    );
  }

export default MovieCard
