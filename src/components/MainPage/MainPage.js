import React, { Fragment, useState } from 'react';
import GridItemList from '../GridItemList/GridItemList';
import './MainPage.css';

const MainPage = () => {
  const [hideDropdown, setDropdown] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected] = useState('Filter by Region');

  const toggleDropdown = () => {
    setDropdown(!hideDropdown);
  };

  const onChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onSelectHandler = (event) => {
    setSelected(event.target.innerText);
  };
  return (
    <Fragment>
      <div className='page-header'>
        <div className='search-container'>
          <i className='fas fa-search'></i>
          <input
            type='text'
            name='search'
            placeholder='Search for a country...'
            value={searchInput}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className='select-container' onClick={toggleDropdown}>
          <div className='select'>
            {selected} <i className='fas fa-chevron-down'></i>
          </div>
          <div className={`select-dropdown ${hideDropdown && 'hide'}`}>
            <div onClick={(e) => onSelectHandler(e)}>Africa</div>
            <div onClick={(e) => onSelectHandler(e)}>Americas</div>
            <div onClick={(e) => onSelectHandler(e)}>Asia</div>
            <div onClick={(e) => onSelectHandler(e)}>Europe</div>
            <div onClick={(e) => onSelectHandler(e)}>Oceania</div>
          </div>
        </div>
      </div>
      <GridItemList name={searchInput} region={selected} />
    </Fragment>
  );
};

export default MainPage;
