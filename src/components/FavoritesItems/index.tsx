import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { useAppState, useAppDispatch } from '../../context';
import { Heading } from '../Heading';
import { SearchFavorites } from '../SearchFavorites';
import TrashIcon from '../../assets/trash.svg';

const FavoriteItem = styled.div`
  display: flex;
  border: 1px solid ${colors.brand};
  border-radius: 4px;
  margin-bottom: 16px;
  overflow: hidden;

  :last-child {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px 4px 8px;
  width: 100%;
`;

const Icon = styled(TrashIcon)`
  display: block;
  width: 16px;
  height: 16px;
  color: ${colors.danger};
  cursor: pointer;
`;

const Disclaimer = styled.div`
  color: ${colors.brand};
  text-align: center;
`;

export const FavoritesItems: FC = () => {
  const [searchText, setSearchText] = useState('');
  const { favorites, byId } = useAppState();
  const dispatch = useAppDispatch();

  const onTrashClick = (title: string) => {
    dispatch({ type: 'TOGGLE_FAVORITES', payload: title });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const filtered = favorites.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
      {favorites.length === 0 && <Disclaimer>No Favorites</Disclaimer>}
      {favorites.length !== 0 && <SearchFavorites onChange={onChange} />}
      {(favorites.length !== 0 && filtered.length === 0) && <Disclaimer>No Filtered Favorites</Disclaimer>}
      {filtered.map((favorite) => {
        const actual = byId[favorite];

        return (
          <FavoriteItem key={actual.title}>
            <Image src={actual.image} alt={actual.title} />
            <Content>
              <Heading as="h5">{actual.title}</Heading>
              <Icon onClick={() => onTrashClick(actual.title)} />
            </Content>
          </FavoriteItem>
        );
      })}
    </>
  );
};
