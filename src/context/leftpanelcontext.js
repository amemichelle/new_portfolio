import { createContext, useContext } from 'react';

export const LayoutContext = createContext(null);

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used inside a LayoutContext.Provider');
  }
  return context;
}