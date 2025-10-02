'use client'

import useStore, {UseStore} from "@/store";
import React, {createContext, ReactNode} from 'react';
import AuthProvider from "./AuthProvider";

const StoreContext = createContext<UseStore | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({
  children
}) => {
  const store = useStore();

  return (
    <AuthProvider>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </AuthProvider>
  )
}