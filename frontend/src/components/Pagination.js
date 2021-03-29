import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Pagination = ({ wordsPerPage, totalWords, paginate, keyword }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <LinkContainer to={`/results?keyword=${keyword}`}>
              <a
                onClick={() => paginate(number)}
                href='!#'
                className='page-link'>
                {number}
              </a>
            </LinkContainer>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
