import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div
      className='home-viewport'
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/images/homesearch.jpg'
        })`,
      }}>
      <div className='search-feature'>
        <h1>Type a Keyword to see SERP stats</h1>
        <div className='search-bar'>
          <form className='search-form'>
            <input className='search-input' type='text' />
            <button type='button' className='search-button'>
              <i className='fas fa-search'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
