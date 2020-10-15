import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import BaseLayout from '../BaseLayout';

const Header = () => (
  <Toolbar>
    <Typography variant="h6">新規登録</Typography>
  </Toolbar>
);

const Presenter: React.FC = () => {
  return <BaseLayout header={<Header />}>登録ページ</BaseLayout>;
};
Presenter.displayName = 'RegisterFormPagePresenter';

const Container: React.FC = () => {
  return <Presenter />;
};
Container.displayName = 'RegisterFormPageContainer';

export default Container;
