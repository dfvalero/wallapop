import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppProvider, useAppState, useAppDispatch } from '.';

describe('<AppProvider />', () => {
  it('Context inits with default props', () => {
    const Consumer = () => {
      const state = useAppState();

      return (
        <div>
          <div data-testid="by.id.length">{Object.keys(state.byId).length}</div>
          <div data-testid="items.lenth">{state.items.length}</div>
          <div data-testid="filtered.items.length">{state.filteredItems.length}</div>
          <div data-testid="max.items">{state.maxItems}</div>
          <div data-testid="favorites.length">{state.favorites.length}</div>
          <div data-testid="is.modal.open">{state.isModalOpen ? 'true' : 'false'}</div>
          <div data-testid="categories">{state.categories.join(', ')}</div>
          <div data-testid="selected.category">{state.selectedCategory}</div>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    expect(screen.getByTestId('by.id.length').innerHTML).toEqual('0');
    expect(screen.getByTestId('items.lenth').innerHTML).toEqual('0');
    expect(screen.getByTestId('filtered.items.length').innerHTML).toEqual('0');
    expect(screen.getByTestId('max.items').innerHTML).toEqual('5');
    expect(screen.getByTestId('favorites.length').innerHTML).toEqual('0');
    expect(screen.getByTestId('is.modal.open').innerHTML).toEqual('false');
    expect(screen.getByTestId('categories').innerHTML).toEqual('title, description, price, email');
    expect(screen.getByTestId('selected.category').innerHTML).toEqual('title');
  });

  it('Fetch Items', () => {
    const Consumer = () => {
      const state = useAppState();
      const dispatch = useAppDispatch();

      return (
        <div>
          <button
            data-testid="fetch.items"
            onClick={() => {
              dispatch({
                type: 'FETCH_ITEMS',
                payload: [
                  {
                    title: 'iPhone',
                    description: 'Vendo iPhone',
                    price: '740',
                    email: 'my@mail.com',
                    image: 'https://exampe.com/image.png',
                  },
                  {
                    title: 'Samsung',
                    description: 'Vendo Samsung',
                    price: '740',
                    email: 'my@mail.com',
                    image: 'https://exampe.com/image.png',
                  },
                ],
              });
            }}
          >
            Fetch Items
          </button>
          <div data-testid="by.id.length">{Object.keys(state.byId).length}</div>
          <div data-testid="items.lenth">{state.items.length}</div>
          <div data-testid="filtered.items.length">{state.filteredItems.length}</div>
          <div data-testid="max.items">{state.maxItems}</div>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    const fetchItems = screen.getByTestId('fetch.items');

    fireEvent.click(fetchItems);

    expect(screen.getByTestId('by.id.length').innerHTML).toEqual('2');
    expect(screen.getByTestId('items.lenth').innerHTML).toEqual('2');
    expect(screen.getByTestId('filtered.items.length').innerHTML).toEqual('2');
    expect(screen.getByTestId('max.items').innerHTML).toEqual('5');
  });

  it('Load More', () => {
    const Consumer = () => {
      const state = useAppState();
      const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch({
          type: 'FETCH_ITEMS',
          payload: [
            {
              title: 'iPhone',
              description: 'Vendo iPhone',
              price: '740',
              email: 'my@mail.com',
              image: 'https://exampe.com/image.png',
            },
            {
              title: 'Samsung',
              description: 'Vendo Samsung',
              price: '740',
              email: 'my@mail.com',
              image: 'https://exampe.com/image.png',
            },
          ],
        });
      }, []);

      return (
        <div>
          <button
            data-testid="toggle.favorites"
            onClick={() => {
              dispatch({ type: 'TOGGLE_FAVORITES', payload: 'iPhone' });
            }}
          >
            Start
          </button>
          <div data-testid="favorites">{state.favorites.join(' ,')}</div>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    const toggleFavorites = screen.getByTestId('toggle.favorites');

    expect(screen.getByTestId('favorites').innerHTML).toEqual('');

    fireEvent.click(toggleFavorites);

    expect(screen.getByTestId('favorites').innerHTML).toEqual('iPhone');

    fireEvent.click(toggleFavorites);

    expect(screen.getByTestId('favorites').innerHTML).toEqual('');
  });

  it('Toggle Favorites', () => {
    const Consumer = () => {
      const state = useAppState();
      const dispatch = useAppDispatch();

      return (
        <div>
          <button
            data-testid="load.more"
            onClick={() => {
              dispatch({ type: 'LOAD_MORE' });
            }}
          >
            Load More
          </button>
          <div data-testid="max.items">{state.maxItems}</div>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    const loadMore = screen.getByTestId('load.more');

    fireEvent.click(loadMore);

    expect(screen.getByTestId('max.items').innerHTML).toEqual('10');
  });

  it('Show modal', () => {
    const Consumer = () => {
      const state = useAppState();
      const dispatch = useAppDispatch();

      return (
        <div>
          ${state.isModalOpen && <div data-testid="is.modal.visible">Modal</div>}
          <button
            data-testid="show.modal"
            onClick={() => {
              dispatch({
                type: 'OPEN_MODAL',
              });
            }}
          >
            Show Modal Item
          </button>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    const showModal = screen.getByTestId('show.modal');

    expect(screen.queryByTestId('is.modal.visible')).toBeNull();

    fireEvent.click(showModal);

    expect(screen.queryByTestId('is.modal.visible')).toBeTruthy();
  });

  it('Close modal', () => {
    const Consumer = () => {
      const state = useAppState();
      const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch({ type: 'OPEN_MODAL' });
      }, []);

      return (
        <div>
          ${state.isModalOpen && <div data-testid="is.modal.visible">Modal</div>}
          <button
            data-testid="close.modal"
            onClick={() => {
              dispatch({
                type: 'CLOSE_MODAL',
              });
            }}
          >
            Show Modal Item
          </button>
        </div>
      );
    };

    render(
      <AppProvider>
        <Consumer />
      </AppProvider>,
    );

    const closeModal = screen.getByTestId('close.modal');

    expect(screen.queryByTestId('is.modal.visible')).toBeTruthy();

    fireEvent.click(closeModal);

    expect(screen.queryByTestId('is.modal.visible')).toBeNull();
  });
});

describe('<AppProvider /> Errors', () => {
  const originalError = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  it('useCartState throws error when not wrapped with CartProvider', () => {
    const Consumer = () => {
      const state = useAppState();
      return <div>{state.maxItems}</div>;
    };

    expect(() => {
      render(<Consumer />);
    }).toThrow('useAppState must be used within a AppProvider');
  });

  it('useCartDispatch throws error when not wrapped with CartProvider', () => {
    const Consumer = () => {
      const dispatch = useAppDispatch();
      return <div onClick={() => dispatch({ type: 'LOAD_MORE' })} />;
    };

    expect(() => {
      render(<Consumer />);
    }).toThrow('useAppDispatch must be used within a AppProvider');
  });
});
