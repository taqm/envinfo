import { Meta } from '@storybook/react';
import * as React from 'react';

import EnvListTable from '.';

const meta: Meta = {
  title: 'EnvListTable',
  component: EnvListTable,
};
export default meta;

export const MainStory = () => {
  const items: React.ComponentProps<typeof EnvListTable>['items'] = [
    {
      id: 'test1',
      pattern: '.*',
      label: 'test1',
    },
  ];
  return <EnvListTable items={items} />;
};
