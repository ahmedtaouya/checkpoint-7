import React, { useState } from 'react';
import MovieList from './component/MovieList';
import MovieDescription from './component/MovieDescription';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'the wolf of wall street', description: 'A mind-bending thriller', posterURL: 'https://fr.web.img6.acsta.net/pictures/210/604/21060483_20131125114549726.jpg', rating: 4.5, trailer: 'https://www.youtube.com/embed/tA3yE4_t6SY?si=Rhs-PnzaJ-e5SrfA' },
    { id: 2, title: 'Interstellar', description: 'A space odyssey', posterURL: 'https://toutelaculture.com/wp-content/uploads/2014/11/interstellar3-691x1024.jpeg', rating: 4.7, trailer: 'https://www.youtube.com/embed/eU0i7L3cakI?si=PGafdZFUV-caCpk3' },
    { id: 3, title: 'creed', description: 'a fighter ', posterURL: 'https://dx35vtwkllhj9.cloudfront.net/united-artists-releasing/creed-iii/images/regions/us/onesheet.jpg', rating: 5, trailer: 'https://www.youtube.com/embed/uYPbbksJxIg?si=XMapXhVVPxaBNI7g' },
  ]);

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Movie Library</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/description/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
