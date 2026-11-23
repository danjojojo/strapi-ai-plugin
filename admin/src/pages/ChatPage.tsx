import { Flex } from '@strapi/design-system';
import styled from 'styled-components';
import { NewChatState } from '../components/chat/NewChatState';
import { ChatProvider } from '../provider/ChatProvider';

const StyledFlex = styled(Flex)`
  width: 70%;
  height: inherit;
`;

export function ChatPage() {
  return (
    <ChatProvider>
      <StyledFlex>
        <NewChatState />
      </StyledFlex>
    </ChatProvider>
  );
}
