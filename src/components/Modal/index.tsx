import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { Heading } from '../Heading';
import TimesIcon from '../../assets/times.svg';

interface ModalProps {
  title: string;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  background-color: rgba(37, 50, 56, 0.8);
  transition: opacity 0.3s ease;
  z-index: 2;
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  margin: 32px auto 32px auto;
  max-width: 600px;
  padding: 16px;
  background: ${colors.white};
`;

const Header = styled.header`
  margin-bottom: 16px;
  padding-right: 32px;
`;

const Icon = styled(TimesIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <Overlay>
      <Wrapper data-id="modal">
        <Icon onClick={onClose} data-id="modal.close" />
        <Header data-id="modal.title">
          <Heading as="h2">{title}</Heading>
        </Header>
        {children}
      </Wrapper>
    </Overlay>
  );
};
