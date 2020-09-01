import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ItemInterface } from '../../types';
import { Heading } from '../Heading';
import { Text } from '../Text';
import StarIcon from '../../assets/star.svg';
import { colors } from '../../constants';

interface ItemProps extends HTMLAttributes<HTMLDivElement>, ItemInterface {
  title: ItemInterface['title'];
  favorited: boolean;
  onFavorited: () => void;
}

const Box = styled.div`
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  margin: 0 auto 16px auto;
  max-width: 400px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  padding: 8px;
`;

const TitleBlock = styled.div`
  margin-bottom: 8px;
  padding-right: 40px;
`;

// Using 1/0 to skip a styled-components warning. More info: https://github.com/styled-components/styled-components/issues/1198
const Icon = styled(StarIcon)<{ favorited: 1 | 0 }>`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({ favorited }) => (favorited ? colors.brand : colors.black)};
`;

export const Item: FC<ItemProps> = ({ title, description, price, email, image, favorited, onFavorited, ...rest }) => {
  return (
    <Box {...rest} data-id="item">
      <Image src={image} alt={title} />
      <Content>
        <Icon favorited={favorited ? 1 : 0} onClick={onFavorited} data-id="icon.favorite" />
        <TitleBlock>
          <Heading as="h2">{title}</Heading>
          <Heading as="h3">{price} €</Heading>
        </TitleBlock>
        <Text>{description}</Text>
        <br />
        <Text>Email: {email}</Text>
      </Content>
    </Box>
  );
};
