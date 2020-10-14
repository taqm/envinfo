import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { EnvItem } from '../EnvListTable';

import { Presenter as ListPage } from './index';

type Args = React.ComponentProps<typeof ListPage>;
const meta: Meta<Args> = {
  title: 'ListPage',
  component: ListPage,
};
export default meta;

const genItem = (size: number) => {
  const colors = ['red', 'blue', 'green'];
  const g = function* (n: number) {
    let cnt = 1;
    while (cnt <= n) {
      const id = cnt++; // eslint-disable-line no-plusplus
      yield {
        id: String(id),
        label: `test_${id}`,
        fontColor: '#fff',
        bgColor: colors[cnt % colors.length],
        pattern: 'test pattern',
      } as EnvItem;
    }
  };
  return Array.from(g(size));
};

const Template: Story<Args> = (props) => <ListPage {...props} />;
export const Main = Template.bind({});
Main.args = {
  items: genItem(3),
};

export const Scroll = Template.bind({});
Scroll.args = {
  items: genItem(30),
};
