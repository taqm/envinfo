import * as React from 'react';

import BaseLayout from '../BaseLayout';
import MyToolbar from '../MyToolbar';

const Presenter: React.FC = () => {
  return (
    <BaseLayout header={<MyToolbar title="新規登録" showBack />}>
      登録ページ
    </BaseLayout>
  );
};
Presenter.displayName = 'RegisterFormPagePresenter';

const Container: React.FC = () => {
  return <Presenter />;
};
Container.displayName = 'RegisterFormPageContainer';

export default Container;
