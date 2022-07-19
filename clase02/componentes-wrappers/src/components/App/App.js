import React from 'react'
import data from "./data";
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Animales</h1>
      {
        data.map((animal) => (
          <AnimalCard 
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            weight={animal.weight}
            scientificName={animal.scientificName}
            />
        ))
      }
    </div>
  );
}

export default App;
