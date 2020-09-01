import React from 'react';
import { Search } from '../Search';
import { FavoritesBox } from '../FavoritesBox';
import styled from 'styled-components';
import { colors, dom } from '../../constants';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${dom.header.height};
  border-bottom: 1px solid ${colors.brand};
  padding: 16px;
  background: ${colors.white};
  box-shadow: 0px -5px 15px 0px ${colors.brand};
  z-index: 1;
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <Search />
      <FavoritesBox />
    </HeaderStyles>
  );
};
