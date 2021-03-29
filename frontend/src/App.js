import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/results' component={ResultsScreen} exact />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
