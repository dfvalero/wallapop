import React, { useEffect } from 'react';
import { getItems } from '../services/api';
import { Layout } from '../components/Layout';
import { Item } from '../components/Item';
import { ViewMore } from '../components/ViewMore';
import { Modal } from '../components/Modal';
import { FavoritesItems } from '../components/FavoritesItems';
import { useAppState, useAppDispatch } from '../context';

const Home = () => {
  const { byId, filteredItems, maxItems, favorites, isModalOpen } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getItems().then((data) => {
      dispatch({ type: 'FETCH_ITEMS', payload: data });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredItems]);

  const onItemClick = (title: string) => {
    dispatch({ type: 'TOGGLE_FAVORITES', payload: title });
  };

  const onViewMoreClick = () => {
    const y = window.scrollY;
    dispatch({ type: 'LOAD_MORE' });

    // To send the event at the end of the stack queue.
    setTimeout(() => {
      window.scrollTo(0, y);
    }, 0);
  };

  return (
    <Layout>
      {filteredItems
        .map((item) => byId[item])
        .slice(0, maxItems)
        .map((item) => (
          <Item
            key={item.title}
            {...item}
            favorited={favorites.includes(item.title)}
            onFavorited={() => onItemClick(item.title)}
          />
        ))}
      {maxItems < filteredItems.length && <ViewMore onClick={onViewMoreClick} />}
      {isModalOpen && (
        <Modal title="My Favorites" onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
          <FavoritesItems />
        </Modal>
      )}
    </Layout>
  );
};

export default Home;
