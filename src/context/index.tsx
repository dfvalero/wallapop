import React, { FC, createContext, useReducer, useContext } from 'react';
import { State, Dispatch } from './types';
import { reducer } from './reducer';

const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    byId: {},
    items: [],
    filteredItems: [],
    maxItems: 5,
    favorites: [],
    isModalOpen: false,
    categories: ['title', 'description', 'price', 'email'],
    selectedCategory: 'title',
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
