import { ReactNode, createContext, useContext } from 'react';
import { RootStore } from '../stores';

// holds a reference to the store (singleton)
let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

// create the hook
export const useRootStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};
