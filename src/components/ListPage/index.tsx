import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import EnvListTable from '../EnvListTable';

const useStyles = makeStyles({
  table: {
    maxWidth: '1200px',
    margin: '24px auto 0',
  },
});

const useItems = () => {
  return [];
};

const ListPage: React.FC = () => {
  const classes = useStyles();
  const items = useItems();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">一覧</Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} className={classes.table}>
        <EnvListTable items={items} />
      </TableContainer>
    </div>
  );
};

ListPage.displayName = 'ListPage';
export default ListPage;
