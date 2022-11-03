import React from 'react';
import { Link } from 'react-router-dom';
import './GridItem.css';

const GridItem = ({
  country: { name, region, population, flags, capital },
}) => {
  return (
    <div className='grid'>
      <div className='grid-image'>
        <img src={flags.png} alt={name.official} />
      </div>
      <div className='grid-body'>
        <Link to={`/name/${name.official.toLowerCase()}`}>
          <h3>{name.official}</h3>
        </Link>
        <p>Population: {population.toLocaleString('en-US')}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital === '' ? <b>NA</b> : capital}</p>
      </div>
    </div>
  );
};

export default GridItem;
