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

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <h3>All Beers!</h3>
      {beers.map((beer) => (
        <div key={beer._id} className='card'>
          <img src={beer.image_url} alt="beer-img"/>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details of {beer.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Beers;