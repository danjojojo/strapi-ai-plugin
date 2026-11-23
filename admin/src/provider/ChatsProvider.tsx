import { createContext, useContext, type ReactNode } from 'react';
import { useChats } from '../hooks/useChats';

const ChatsContext = createContext<ReturnType<typeof useChats> | undefined>(undefined);

export function useChatsContext() {
  const context = useContext(ChatsContext);
  if (!context) {
    throw new Error('useChatsContext must be used within ChatsProvider');
  }
  return context;
}

export function ChatsProvider({ children }: { children: ReactNode }) {
  const value = useChats();
  return <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>;
}
