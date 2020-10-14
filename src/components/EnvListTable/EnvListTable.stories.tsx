import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import EnvListTable from '.';

type Args = React.ComponentProps<typeof EnvListTable>;
const meta: Meta<Args> = {
  title: 'EnvListTable',
  component: EnvListTable,
  argTypes: {
    items: { control: false },
  },
};
export default meta;

const Template: Story<Args> = (props) => <EnvListTable {...props} />;
Template.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Main = Template.bind({});
Main.parameters = {
  controls: { hideNoControlsWarning: true },
};
Main.args = {
  items: [
    {
      id: 'test1',
      pattern: '.*.local',
      fontColor: '#fff',
      bgColor: '#f00',
      label: 'test1',
    },
    {
      id: 'test2',
      pattern: '.*.staging',
      fontColor: '#fff',
      bgColor: '#0f0',
      label: 'test2',
    },
    {
      id: 'test3',
      pattern: '.*.production',
      fontColor: '#fff',
      bgColor: '#00f',
      label: 'test3',
    },
  ],
};
