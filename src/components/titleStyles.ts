import { darken, mode, whiten } from '@chakra-ui/theme-tools';
import React from 'react';

export const TitleStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props: React.FC) => ({
      color: mode(darken('highlight', 10), whiten('primary', 0))(props),
    }),
  },
  defaultProps: {},
};
