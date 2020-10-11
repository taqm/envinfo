import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ListPage from './components/ListPage';

ReactDOM.render(
  <>
    <CssBaseline />
    <ListPage />
  </>,
  document.getElementById('app'),
);
