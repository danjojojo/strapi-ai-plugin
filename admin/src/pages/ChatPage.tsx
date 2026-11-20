import { Flex } from '@strapi/design-system';
import { NewChatState } from '../components/chat/NewChatState';

export function ChatPage() {
  return (
    <Flex width="70%" height="inherit">
      <NewChatState />
    </Flex>
  );
}
