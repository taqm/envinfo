import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ListPage from './pages/ListPage';

const App: React.VFC = () => (
  <ChakraProvider>
    <ListPage />
  </ChakraProvider>
);
ReactDOM.render(<App />, document.getElementById('root'));
