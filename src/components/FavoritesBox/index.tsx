import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { useAppState, useAppDispatch } from '../../context';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Box = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  min-height: 36px;
  padding: 4px;
  color: ${colors.brand};
  cursor: pointer;
`;

export const FavoritesBox = () => {
  const { favorites } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Box onClick={() => dispatch({ type: 'OPEN_MODAL' })}>{favorites.length} Favorites</Box>
    </Wrapper>
  );
};
