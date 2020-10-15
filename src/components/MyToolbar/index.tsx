import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  title: string;
  showBack?: boolean;
};

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
}));

const MyToolbar: React.FC<Props> = ({ title, showBack }) => {
  const classes = useStyles();
  const hist = useHistory();
  const onBackClick = React.useCallback(() => {
    hist.goBack();
  }, [hist]);
  return (
    <Toolbar>
      {showBack && (
        <IconButton
          edge="start"
          color="inherit"
          className={classes.backButton}
          onClick={onBackClick}
        >
          <ArrowBack />
        </IconButton>
      )}
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
    </Toolbar>
  );
};

MyToolbar.displayName = 'MyToolbar';
export default MyToolbar;
