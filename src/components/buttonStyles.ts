import { darken, mode, whiten } from '@chakra-ui/theme-tools';
import React from 'react';

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props: React.FC) => ({
      color: 'white',
      bg: mode(darken('highlight', 10), whiten('primary', 20))(props),
      _hover: {
        bg: mode(darken('highlight', 20), whiten('primary', 0))(props),
        boxShadow: 'md',
      },
    }),
  },
  defaultProps: {},
};
