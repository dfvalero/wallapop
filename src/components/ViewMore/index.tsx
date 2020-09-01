import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

interface ViewMoreProps extends HTMLAttributes<HTMLDivElement> {}

const ViewMoreStyles = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export const ViewMore: FC<ViewMoreProps> = ({ ...rest }) => {
  return (
    <ViewMoreStyles {...rest}>
      <Button>View More</Button>
    </ViewMoreStyles>
  );
};
