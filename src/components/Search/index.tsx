import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { useAppState, useAppDispatch } from '../../context';
import { SearchBox } from '../SearchBox';
import { Selector } from './Selector';
import { Categories } from '../../context/types';

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Search = () => {
  const [text, setText] = useState('');
  const { categories, selectedCategory } = useAppState();
  const dispatch = useAppDispatch();

  const onSelect = (opt: Categories) => {
    dispatch({ type: 'UPDATE_SELECTED_CATEGORY', payload: { selectedCategory: opt } });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch({ type: 'SUBMIT_GLOBAL_SEARCH', payload: { text } });
    }
  };

  return (
    <Wrapper data-id="global.search">
      <SearchBox value={text} onChange={onChange} onKeyDown={onKeyDown} />
      <Selector selected={selectedCategory} options={categories} onSelect={onSelect} />
    </Wrapper>
  );
};
