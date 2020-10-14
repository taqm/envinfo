import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import InfoLabel from './index';

type Args = React.ComponentProps<typeof InfoLabel>;
const meta: Meta<Args> = {
  title: 'InfoLabel',
  component: InfoLabel,
  argTypes: {
    text: { control: 'text' },
    fontColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
};
export default meta;

const Template: Story<Args> = (props) => {
  return <InfoLabel {...props} />;
};

export const Main = Template.bind({});
Main.args = {
  bgColor: 'rgba(255, 0, 0, 1)',
  fontColor: '#fff',
  text: 'サンプル',
};
