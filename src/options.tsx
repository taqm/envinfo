import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
};

const App: React.FC<Props> = () => (
  <h1>Hello Option Page</h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
