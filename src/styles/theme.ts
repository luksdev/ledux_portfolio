import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from '../components/buttonStyles';
import { TitleStyles as Heading } from '../components/titleStyles';
import { BoxStyles as Container } from '../components/boxStyles';
import '@fontsource/inter';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const myTheme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
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
    Container,
  },
});
