import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

const TextStyles = styled.p`
  margin: 0;
`;

export const Text: FC<TextProps> = ({ children, ...rest }) => {
  return <TextStyles {...rest}>{children}</TextStyles>;
};
