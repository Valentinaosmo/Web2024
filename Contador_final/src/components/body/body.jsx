import React, { useState, useEffect } from 'react';
import { Button } from '../button/button';

export const Body = () => {
  const [count, setCount] = useState(0);
  const [pokemonImageUrl, setPokemonImageUrl] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    setIsLoading(true);
    const randomPokemonId = getRandomNumber(1, 898); // Obtener un Pokémon aleatorio
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      .then(response => response.json())
      .then(data => {
        setPokemonImageUrl(data.sprites.front_default);
        setPokemonName(data.name);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
        setIsLoading(false);
      });
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const counter = (value) => {
    if (value === 'Sumar') {
      setCount(count + 1);
    } else if (value === 'Restar' && count > 0) {
      setCount(count - 1);
    } else if (value === 'Reiniciar') {
      setCount(0);
    }
    fetchPokemon();
  };

  return (
    <div className="general">
      <div className="pokedex">
        
        <div className="screen">
        
          {isLoading ? (
            <p className="loading-text">Cargando...</p>
          ) : (
            <div className="pokemon-info">
              <p className="pokemon-name">{pokemonName}</p>
              <img src={pokemonImageUrl} alt={pokemonName} className="pokemon-image" />
              
            </div>
          )}
        </div>
        <div className='contador'>
          <p id='contador'>Contador: {count}</p>
        </div>
        
        
      </div>
      <div className="buttons">
      <Button type="Restar" text="Disminuir" counter={counter} />
      <Button type="Reiniciar" text="Reiniciar" counter={counter} />
      <Button type="Sumar" text="Aumentar" counter={counter} />
      </div>
  </div>
  );
};

export default Body;
