import { createContext, ReactNode, useEffect, useReducer } from "react";
import Reducers from "./Reducer";

const initialState = {
  notify: {},
};

export const GlobalContext = createContext<any>(initialState);

const GlobalState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
