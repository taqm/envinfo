import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import BaseLayout from '../BaseLayout';
import EnvListTable, { EnvItem } from '../EnvListTable';
import MyToolbar from '../MyToolbar';

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

type Props = {
  items: EnvItem[];
  onAddClick: () => void;
};

export const Presenter: React.FC<Props> = ({ items, onAddClick }) => {
  const classes = useStyle();
  return (
    <BaseLayout header={<MyToolbar title="一覧" />}>
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
