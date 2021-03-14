import { Box, Container, Flex } from '@chakra-ui/react';
import * as React from 'react';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.VFC<Props> = ({ children }) => (
  <Box bg="gray.50" minH="100vh">
    <Header />
    <Container as="main" maxW="container.lg" px="4" mt="4">
      <Flex>{children}</Flex>
    </Container>
  </Box>
);

MainLayout.displayName = 'MainLayout';

export default MainLayout;
