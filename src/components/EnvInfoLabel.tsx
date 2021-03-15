import { Box, Text } from '@chakra-ui/layout';
import * as React from 'react';

type Props = {
  text: string;
  fontColor: string;
  bgColor: string;
  size: 'large' | 'small';
};

const sizeProps = {
  large: {
    fontSize: '3xl',
    px: '3',
  },
  small: {
    fontSize: 'md',
    px: '2',
  },
};

const EnvInfoLabel = React.memo<Props>(({ text, fontColor, bgColor, size }) => {
  const sizeSet = sizeProps[size];
  return (
    <Box
      bgColor={bgColor}
      rounded="md"
      w="fit-content"
      px={sizeSet.px}
      py="0.5"
    >
      <Text
        textColor={fontColor}
        fontSize={sizeSet.fontSize}
        fontWeight="bold"
        userSelect="none"
      >
        {text}
      </Text>
    </Box>
  );
});

export default EnvInfoLabel;
