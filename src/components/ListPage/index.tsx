import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const ListPage: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">一覧</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ListPage.displayName = 'ListPage';
export default ListPage;
