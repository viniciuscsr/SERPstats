import React from 'react';

const HomeScreen = () => {
  return (
    <div className='home-viewport'>
      <div className='search-feature'>
        <h1>Type a Keyword to see SERP stats</h1>
        <div className='search-bar'>
          <form className='search-form'>
            <input className='search-input' type='text' />
            <button type='button' className='search-button'>
              <i class='fas fa-search'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
