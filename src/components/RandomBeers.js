import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Beer App</Link>
    </div>
  );
};

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      });
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='beer-details'>
        <img src={randomBeer.image_url} alt="beer-img"/>
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>First Brewed: {randomBeer.first_brewed}</p>
        <p>Attenuation Level: {randomBeer.attenuation_level}</p>
        <p>Description: {randomBeer.description}</p>
        <p>Contributed by: {randomBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default RandomBeer;