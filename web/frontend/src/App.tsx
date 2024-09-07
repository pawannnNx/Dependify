import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/index';
import PackagePage from './pages/package';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/package" component={PackagePage} />
      </Switch>
    </Router>
  );
};

export default App;
