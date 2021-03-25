import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../actions/searchActions';

const HomeScreen = () => {
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  // const keywordSearch = useSelector((state) => state.keywordSearch);
  // const { loading, results, error } = keywordSearch;

  // useEffect(() => {
  //   if (results) {
  //     //history.push()
  //     console.log('redirect');
  //   }
  // }, [results]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(search(keyword));
    //history.push
    console.log('dispatched');
  };

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
          <form className='search-form' onSubmit={submitHandler}>
            <input
              className='search-input'
              type='text'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type='submit' className='search-button'>
              <i className='fas fa-search'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
