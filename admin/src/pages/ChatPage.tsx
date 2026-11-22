import { Flex } from '@strapi/design-system';
import styled from 'styled-components';
import { NewChatState } from '../components/chat/NewChatState';

const StyledFlex = styled(Flex)`
  width: 70%;
  height: inherit;
`;

export function ChatPage() {
  return (
    <StyledFlex>
      <NewChatState />
    </StyledFlex>
  );
}
