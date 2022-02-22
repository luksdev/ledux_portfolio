import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from '../components/buttonStyles';
import { TitleStyles as Heading } from '../components/titleStyles';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const myTheme = extendTheme({
  config,
  colors: {
    primary: '#8257e6',
    secondary: '#e1e1e6',
    background: '#19181F',
    highlight: '#07D962',
    danger: '#E82D92',
  },
  components: {
    Button,
    Heading,
  },
});
