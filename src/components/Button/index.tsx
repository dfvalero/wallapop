import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const ButtonStyles = styled.button`
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 18px;
  color: ${colors.brand};
  background: ${colors.white};
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    color: ${colors.white};
    background: ${colors.brand};
  }
`;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyles {...rest}>{children}</ButtonStyles>;
};
