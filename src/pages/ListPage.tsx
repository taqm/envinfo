import * as React from 'react';
import Header from '../components/Header';

const ListPage: React.VFC = () => {
  return (
    <>
      <Header />
      <h1>Hello List Page</h1>
    </>
  );
};

ListPage.displayName = 'ListPage';

export default ListPage;
