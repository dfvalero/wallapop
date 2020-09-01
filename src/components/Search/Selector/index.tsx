import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants';
import { capitalize } from '../../../utils';
import ChevronIcon from '../../../assets/chevron.svg';
import { Categories, CategoriesOptions } from '../../../context/types';

interface SelectorProps {
  selected: string;
  options: CategoriesOptions;
  onSelect: (option: Categories) => void;
}

interface SelectProps {
  open: boolean;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 0;
  white-space: nowrap;
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  padding: 6px 4px;
  color: ${colors.brand};
  background: ${colors.white};
  cursor: pointer;
`;

const Text = styled.div`
  margin-right: 4px;
`;

const Icon = styled(ChevronIcon)<SelectProps>`
  display: block;
  width: 24px;
  height: 24px;
  color: ${colors.brand};
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const Select = styled.div<SelectProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  bottom: -4px;
  right: -1px;
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  width: auto;
  min-width: calc(100% + 2px);
  padding: 6px 4px;
  background: ${colors.white};
  transform: translate(0, 100%);
`;

const Option = styled.div`
  cursor: pointer;
  border-radius: 4px;
  padding: 4px;

  :hover {
    background: ${colors.brand};
    color: ${colors.white};
  }
`;

export const Selector = ({ selected, options, onSelect }: SelectorProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((state) => !state);
  };

  const select = (option: Categories) => {
    setOpen(false);
    onSelect(option);
  };

  return (
    <Wrapper onClick={toggle}>
      <Text>{capitalize(selected)}</Text>
      <Icon open={open} />
      <Select open={open} onClick={(e) => e.stopPropagation()}>
        {options.map((option) => (
          <Option key={option} onClick={() => select(option)}>
            {capitalize(option)}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};
