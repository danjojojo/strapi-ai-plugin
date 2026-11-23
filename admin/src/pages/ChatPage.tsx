import styled from 'styled-components';
import { Flex } from '@strapi/design-system';
import { ChatInput } from '../components/chat/ChatInput';

const StyledChatLayout = styled(Flex)`
  width: 70%;
  height: 100vh;
  justify-content: end;
  align-items: flex-end;
`;

export function ChatPage() {
  return (
    <StyledChatLayout>
      <ChatInput />
    </StyledChatLayout>
  );
}
