import { createContext, useContext, useState } from 'react';

const appContextDefaultValues = {
  pageIndex: 0,
  setPageIndex: () => {}
};

const AppContext = createContext(appContextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [pageIndex, setPageIndex] = useState(0);

  const value = {
    pageIndex,
    setPageIndex
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}