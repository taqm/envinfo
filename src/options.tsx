import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage';
import ShowItemPage from './pages/ShowItemPage';

const App: React.VFC = () => (
  <ChakraProvider>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={() => <ListPage />} />
        <Route path="/items/:id" exact component={() => <ShowItemPage />} />
      </Switch>
    </HashRouter>
  </ChakraProvider>
);
ReactDOM.render(<App />, document.getElementById('root'));
