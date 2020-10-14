import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import BaseLayout from '../BaseLayout';
import EnvListTable from '../EnvListTable';

const useItems = () => {
  return [];
};

const Header = () => (
  <Toolbar>
    <Typography variant="h6">一覧</Typography>
  </Toolbar>
);

const ListPage: React.FC = () => {
  const items = useItems();
  return (
    <BaseLayout header={<Header />}>
      <TableContainer component={Paper}>
        <EnvListTable items={items} />
      </TableContainer>
    </BaseLayout>
  );
};

ListPage.displayName = 'ListPage';
export default ListPage;
