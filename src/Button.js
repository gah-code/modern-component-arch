import React from 'react';
import styled from 'styled-components';

import { COLORS } from './constants';

const Button = ({ variant, size, children }) => {
  return <ButtonElem>{children}</ButtonElem>;
};

const ButtonElem = styled.button`
  font-size: ${18 / 16}rem;
  padding: 16px 24px;
  border-radius: 2px;
  border: none;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;
export default Button;
