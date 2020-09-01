import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import SearchIcon from '../../assets/search.svg';

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

const Box = styled.div`
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  padding: 4px;
  background: ${colors.white};
`;

const Icon = styled(SearchIcon)`
  display: block;
  width: 24px;
  height: 24px;
  color: ${colors.brand};
`;

const Input = styled.input`
  border: 0;
  margin-left: 4px;
  padding: 0;
  width: 100%;
  background: transparent;
  color: ${colors.brand};
  outline: none;
`;

export const SearchBox: FC<SearchBoxProps> = ({ value, onChange, onKeyDown }) => {
  return (
    <Box>
      <Icon />
      <Input type="search" value={value} onChange={onChange} onKeyDown={onKeyDown} />
    </Box>
  );
};
