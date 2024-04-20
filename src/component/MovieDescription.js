import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MovieDescription({ movies }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <p>Id du film: {id}</p>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          {/* <video width="560" height="315" src={movie.trailer} controls /> */}

		  <iframe width="560" height="315" src={movie.trailer}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
}

export default MovieDescription;
