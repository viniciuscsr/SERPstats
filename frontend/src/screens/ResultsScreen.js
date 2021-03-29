import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import { Container, Table, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { LinkContainer } from 'react-router-bootstrap';

const ResultsScreen = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(15);

  const keywordSearch = useSelector((state) => state.keywordSearch);
  const { loading, results, error } = keywordSearch;

  const { keyword } = queryString.parse(location.search);

  let indexOfLastWord;
  let indexOfFirstWord;
  let currentWords;

  useEffect(() => {
    if (results) {
      // Get current words
      indexOfLastWord = currentPage * wordsPerPage;
      indexOfFirstWord = indexOfLastWord - wordsPerPage;
      currentWords = results.slice(indexOfFirstWord, indexOfLastWord);
    }
  }, []);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Row className='button-row'>
        <Container>
          <LinkContainer to='/'>
            <Button className='goback-button'>Go Back</Button>
          </LinkContainer>
        </Container>
      </Row>
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container>
              <h1>{keyword}</h1>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Container>
          <Message>{error}</Message>
          <Message variant='warning'>
            Our Google Search API only allows 50 request per month. Please watch
            the demo video bellow.
          </Message>
          <div className='video-responsive'>
            <iframe
              width='853'
              height='480'
              src='https://www.youtube.com/embed/NpEaa2P7qZI'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
        </Container>
      ) : (
        <>
          <Container>
            <Row>
              <Col className='counter-col'>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Word</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentWords.map((result, index) => (
                      <tr key={index}>
                        <td>{index + indexOfFirstWord + 1}</td>
                        <td>{result[0].substring(0, 20)}</td>
                        <td>{result[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination
                  wordsPerPage={wordsPerPage}
                  totalWords={results.length}
                  paginate={paginate}
                  keyword={keyword}
                />
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ResultsScreen;
