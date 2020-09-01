import { Action, State, Categories } from './types';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_ITEMS': {
      let byId: State['byId'] = {};
      let items: string[] = [];

      action.payload.forEach((item) => {
        byId[item.title] = item;
        items.push(item.title);
      });

      return {
        ...state,
        byId,
        items,
        filteredItems: items,
        maxItems: 5,
      };
    }
    case 'LOAD_MORE': {
      return {
        ...state,
        maxItems: state.maxItems + 5,
      };
    }
    case 'TOGGLE_FAVORITES': {
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter((item) => item !== action.payload),
        };
      }

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case 'SUBMIT_GLOBAL_SEARCH': {
      const getFiltered = (category: Categories) => {
        const items = state.items.map((item) => state.byId[item]);

        if (category === 'price' && action.payload.text === '') {
          return items;
        }

        if (category === 'price') {
          return items.filter((item) => item[category] === action.payload.text);
        }

        return items.filter((item) => item[category].toLowerCase().includes(action.payload.text.toLowerCase()));
      };

      const filtered = getFiltered(state.selectedCategory);
      const newItems = filtered.map((item) => item.title);

      return {
        ...state,
        filteredItems: newItems,
        maxItems: 5,
      };
    }
    case 'UPDATE_SELECTED_CATEGORY': {
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
      };
    }
  }
};
