import React from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import { Container, Table, Col, Row, Jumbotron } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ResultsScreen = ({ location }) => {
  const keywordSearch = useSelector((state) => state.keywordSearch);
  const { loading, results, error } = keywordSearch;

  const { keyword } = queryString.parse(location.search);

  return (
    <div className='counter-container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            <Col>
              <Jumbotron fluid>
                <Container>
                  <h1>{keyword}</h1>
                  <p>
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col className='counter-col'>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Word</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{result[0].substring(0, 20)}</td>
                      <td>{result[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default ResultsScreen;
