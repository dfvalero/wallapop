import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../Header';
import { dom } from '../../constants';

const Main = styled.main`
  margin: 0 auto;
  padding: calc(${dom.header.height} + 16px) 16px 16px 16px;
  max-width: ${dom.body.maxWidth};
`;

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);
