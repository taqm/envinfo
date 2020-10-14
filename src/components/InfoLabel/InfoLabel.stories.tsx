import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import InfoLabel from './index';

const meta: Meta = {
  title: 'InfoLabel',
  component: InfoLabel,
  argTypes: {
    text: { control: 'text' },
    fontColor: { control: 'color' },
    bgColor: { control: 'color' },
  },
};
export default meta;

type Args = React.ComponentProps<typeof InfoLabel>;
const Template: Story<Args> = (props) => {
  return <InfoLabel {...props} />;
};

export const Main = Template.bind({});
Main.args = {
  bgColor: 'rgba(255, 0, 0, 1)',
  fontColor: '#fff',
  text: 'サンプル',
};
