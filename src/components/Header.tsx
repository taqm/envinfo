import { Container, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

type Props = {};

const Header: React.VFC<Props> = () => (
  <Flex as="header" align="center" bg="green.400" h="12">
    <Container maxW="container.lg" px="0">
      <Heading as="h1" size="lg" color="white" letterSpacing={'.1rem'}>
        envinfo
      </Heading>
    </Container>
  </Flex>
);

Header.displayName = 'Header';

export default Header;
