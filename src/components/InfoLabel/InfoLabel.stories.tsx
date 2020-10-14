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

export const Large = Template.bind({});
Large.args = {
  bgColor: 'rgba(255, 0, 0, 1)',
  fontColor: '#fff',
  text: 'サンプル',
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  bgColor: 'rgba(255, 0, 0, 1)',
  fontColor: '#fff',
  text: 'サンプル',
  size: 'medium',
};
