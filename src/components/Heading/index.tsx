import React, { FC, HTMLAttributes } from 'react';
import { typography } from '../../constants';
import styled, { css } from 'styled-components';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: keyof typeof typography.sizes.heading;
}

const HeadingStyles = styled.h1<HeadingProps>`
  ${({ as }) => {
    return css`
      font-size: ${typography.sizes.heading[as]};
      margin: 0;
    `;
  }};
`;

export const Heading: FC<HeadingProps> = ({ children, ...rest }) => {
  return <HeadingStyles {...rest}>{children}</HeadingStyles>;
};
