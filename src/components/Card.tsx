import { Box, ContainerProps } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
  width?: ContainerProps['w'];
};

const Card: React.VFC<Props> = ({ width = '100%', children }) => (
  <Box bg="white" w={width} rounded="md" p="4" boxShadow="base">
    {children}
  </Box>
);

Card.displayName = 'Card';

export default Card;
