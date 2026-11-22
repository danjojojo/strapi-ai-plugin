import { Flex, Typography } from '@strapi/design-system';
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
  return (
    <StyledFlex>
      <Typography variant="alpha">Welcome!</Typography>
      <ChatInput />
    </StyledFlex>
  );
}
