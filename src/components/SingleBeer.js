import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
        <Link to="/">Beer App</Link>
      </div>
    );
  };

function SingleBeer () {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            setBeer(response.data);
          });
      }, [beerId]);

      if (!beer) {
        return <div>Loading...</div>;
      }

    
        return (
            <div>
                <Header />
                  <div className='beer-detail'>
                  <img src={beer.image_url} alt="beer-img"/>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>{beer.first_brewed}</p>
                  <p>{beer.attenuation_level}</p> 
                  <p>{beer.description}</p>
                  <p>Contributed by: {beer.contributed_by}</p>
                  </div>
    </div>
  )
}

export default SingleBeer;