import { ItemInterface } from '../types';

const categories = ['title', 'description', 'price', 'email'] as const;

export type CategoriesOptions = typeof categories;
export type Categories = typeof categories[number];

export type Action =
  | { type: 'FETCH_ITEMS'; payload: ItemInterface[] }
  | { type: 'LOAD_MORE' }
  | { type: 'TOGGLE_FAVORITES'; payload: string }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'SUBMIT_GLOBAL_SEARCH'; payload: { text: string } }
  | { type: 'UPDATE_SELECTED_CATEGORY'; payload: { selectedCategory: Categories } };
export type Dispatch = (action: Action) => void;
export type State = {
  byId: {
    [key: string]: ItemInterface;
  };
  items: string[];
  filteredItems: string[];
  maxItems: number;
  favorites: string[];
  isModalOpen: boolean;
  categories: typeof categories;
  selectedCategory: typeof categories[number];
};
