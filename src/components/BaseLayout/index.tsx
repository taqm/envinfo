import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
  header: JSX.Element;
};

const useStyles = makeStyles({
  content: {
    margin: '24px auto 0',
    height: '100hv',
  },
});

const BaseLayout: React.FC<Props> = ({ header, children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">{header}</AppBar>
      <Container maxWidth="lg">
        <Typography className={classes.content}>{children}</Typography>
      </Container>
    </>
  );
};
BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;
