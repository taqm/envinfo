import { chakra } from '@chakra-ui/react';

const Card = chakra('div', {
  baseStyle: {
    shadow: 'base',
    rounded: 'lg',
    bg: 'white',
    p: 4,
  },
});

Card.displayName = 'Card';

export default Card;
