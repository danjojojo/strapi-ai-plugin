import { Flex, Typography } from '@strapi/design-system';
import { useAuth } from '@strapi/strapi/admin';
import styled from 'styled-components';
import { ChatInput } from './ChatInput';

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 100%;
  gap: 20px;
`;

export function NewChatState() {
  const user = useAuth('NewChatState', (state) => state.user);

  return (
    <StyledFlex>
      <Typography variant="alpha">{`Welcome, ${user?.firstname}!`}</Typography>
      <ChatInput />
    </StyledFlex>
  );
}
