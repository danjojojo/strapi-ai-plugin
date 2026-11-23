import { Box, Flex, Textarea } from '@strapi/design-system';
import styled from 'styled-components';
import { TEXTAREA } from '../../constants';
import { useTextarea } from '../../hooks/useTextarea';
import { useChatContext } from '../../provider/ChatProvider';
import { ChatButtons } from './ChatButtons';

const StyledBox = styled(Box)`
  width: 100%;
`;

export function ChatTextInput() {
  const { message } = useChatContext();
  const { ref, onResize, onEnter } = useTextarea();

  return (
    <Flex direction="column" gap="8px" width="100%" alignItems="flex-end">
      <StyledBox>
        <Textarea
          ref={ref}
          value={message}
          resizable={false}
          onChange={onResize}
          onKeyDown={onEnter}
          placeholder={TEXTAREA.PLACEHOLDER}
          maxHeight={`${TEXTAREA.MAX_HEIGHT}vh`}
          minHeight={`${TEXTAREA.MIN_HEIGHT}px`}
        />
      </StyledBox>
      <ChatButtons />
    </Flex>
  );
}
