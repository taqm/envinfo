import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import BaseLayout from '../BaseLayout';
import EnvListTable, { EnvItem } from '../EnvListTable';

const useStyle = makeStyles((theme) => ({
  addButtonArea: {
    marginTop: theme.spacing(2),
    position: 'sticky',
    bottom: theme.spacing(2),
  },
}));

const useItems = (): EnvItem[] => {
  return [];
};

const Header = () => (
  <Toolbar>
    <Typography variant="h6">一覧</Typography>
  </Toolbar>
);

type Props = {
  items: EnvItem[];
  onAddClick: () => void;
};

export const Presenter: React.FC<Props> = ({ items, onAddClick }) => {
  const classes = useStyle();
  return (
    <BaseLayout header={<Header />}>
      <TableContainer component={Paper}>
        <EnvListTable items={items} />
      </TableContainer>

      <Grid container justify="center" className={classes.addButtonArea}>
        <Fab color="primary" aria-label="add" onClick={onAddClick}>
          <AddIcon />
        </Fab>
      </Grid>
    </BaseLayout>
  );
};
Presenter.displayName = 'ListPagePresenter';

const Container = () => {
  const items = useItems();
  const hist = useHistory();
  const onAddClick = React.useCallback(() => {
    hist.push('/items/new');
  }, [hist]);
  return <Presenter items={items} onAddClick={onAddClick} />;
};

Container.displayName = 'ListPageContainer';
export default Container;
