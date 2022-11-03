import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './DetailPage.css';

const DetailPage = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const runFunc = async () => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${match.params.name}`
      );
      setData(res.data[0]);
    };
    runFunc();
    // console.log(data);
  }, [match]);

  const printArray = (arr) => {
    let names = [];
    for (let elem of arr) {
      //   console.log(elem);
      names.push(elem.name);
    }
    return names.join(', ');
  };

  return (
    <div className='detail-page'>
      {data === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/'>
            <button className='btn'>
              <i className='fas fa-arrow-left'></i> Back
            </button>
          </Link>
          <div className='details'>
            <div className='country-flag'>
              <img src={data.flag} alt={data.name} />
            </div>
            <div className='country'>
              <div className='country-details'>
                <h2>{data.name}</h2>
                <p>Native Name: {data.nativeName}</p>
                <p>Population: {data.population.toLocaleString('en-US')}</p>
                <p>Region: {data.region}</p>
                <p>Sub Region: {data.subregion}</p>
                <p>Capital: {data.capital}</p>
              </div>
              <div className='country-details'>
                <p>Top Level Domain: {data.topLevelDomain.join(', ')}</p>
                <p>Currencies: {printArray(data.currencies)}</p>
                <p>Languages: {printArray(data.languages)}</p>
              </div>
              {/* <p>
                Border Countries:
                {data.borders.map((country) => (
                  <span>{displayBorders(country)}</span>
                ))}
              </p> */}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default DetailPage;
