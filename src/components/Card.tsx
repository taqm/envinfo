import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
  w?: BoxProps['w'];
  mt?: BoxProps['mt'];
};

const Card: React.VFC<Props> = ({ w = '100%', mt, children }) => (
  <Box bg="white" w={w} mt={mt} rounded="md" p="4" boxShadow="base">
    {children}
  </Box>
);

Card.displayName = 'Card';

export default Card;
