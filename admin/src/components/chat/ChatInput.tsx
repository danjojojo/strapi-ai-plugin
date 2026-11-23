import { Flex } from '@strapi/design-system';
import { ChatButtons } from './ChatButtons';
import { ChatTextInput } from './ChatTextInput';
import styled from 'styled-components';
import { Theme } from '../../types/ui.types';

const Wrapper = styled(Flex)`
  background-color: ${({ theme }: Theme) => theme.colors.neutral0};
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-end;
  border-radius: 8px;
  position: sticky;
  bottom: 16px;
`;

const ButtonsWrapper = styled(Flex)`
  padding: 16px 16px 16px 0px;
  align-items: flex-start;
`;

export function ChatInput() {
  return (
    <Wrapper>
      <ChatTextInput />
      <ButtonsWrapper>
        <ChatButtons />
      </ButtonsWrapper>
    </Wrapper>
  );
}
