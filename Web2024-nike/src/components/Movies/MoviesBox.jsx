import { Movies } from './Movies'
import './MoviesBox.css'
import { React } from "react"

export function MoviesBox({ movies }) {
  return (
    <>
      <h2 id='motivation'>Tendencias del Momento</h2>
      <div className='moviesBox-container'>
        {movies.map((movie) => (
          <Movies
           key={movie.id} 
           url={movie.url} 
           title={movie.title} 
           text={movie.text}
           price={movie.price}/>
        ))}
      </div>
    </>
  );
}