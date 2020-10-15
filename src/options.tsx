import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import ListPage from './components/ListPage';

const Options = () => (
  <Router>
    <Switch>
      <Route component={ListPage} path="/" exact />
    </Switch>
  </Router>
);

ReactDOM.render(
  <>
    <CssBaseline />
    <Options />
  </>,
  document.getElementById('app'),
);
