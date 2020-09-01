import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { SearchBox } from '../SearchBox';

interface SearchFavoritesProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

export const SearchFavorites: FC<SearchFavoritesProps> = ({ onChange }) => {
  const [text, setText] = useState('');

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange(e);
  };

  return (
    <Wrapper>
      <SearchBox value={text} onChange={onHandleChange} />
    </Wrapper>
  );
};
