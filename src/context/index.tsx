import {createContext, useReducer} from 'react';
import {reducer} from './reducer';

const INITIAL_STATE = {
  kg: '',
  meter: '',
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
