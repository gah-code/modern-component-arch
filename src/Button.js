import React from 'react';
import styled from 'styled-components';

import { COLORS } from './constants';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '8px 16px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '14px 20px',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '18px 32px',
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];
  return <ButtonElem style={styles}>{children}</ButtonElem>;
};

const ButtonElem = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: none;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;
export default Button;
