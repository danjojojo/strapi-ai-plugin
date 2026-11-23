import { ChatProvider } from './ChatProvider';
import { ChatsProvider } from './ChatsProvider';
import type { ChildrenWrapper } from '../types/ui.types';

export function AppProvider({ children }: ChildrenWrapper) {
  return (
    <ChatsProvider>
      <ChatProvider>{children}</ChatProvider>
    </ChatsProvider>
  );
}
