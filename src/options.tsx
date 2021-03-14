import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage';

const App: React.VFC = () => (
  <ChakraProvider>
    <MemoryRouter>
      <Switch>
        <Route path="/" exact component={() => <ListPage />} />
      </Switch>
    </MemoryRouter>
  </ChakraProvider>
);
ReactDOM.render(<App />, document.getElementById('root'));
