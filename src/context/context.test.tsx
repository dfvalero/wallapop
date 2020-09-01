import React from 'react';
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
          <div data-testid="is.modal.open">{state.isModalOpen ? 'true': 'false'}</div>
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

  it('Show modal', () => {
    const Consumer = () => {
        const state = useAppState();
        const dispatch = useAppDispatch();
  
        return (
          <div>
            ${state.isModalOpen && <div data-testid="is.modal.visible">Modal</div>}
            <button data-testid="show.modal"
              onClick={() => {
                dispatch({
                  type: 'OPEN_MODAL'
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
