
import React, { createContext, useReducer, useContext } from 'react';
import {initialState,itemReducer} from "../reducer/itemReducer";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialState);
  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  return useContext(ItemContext);
};