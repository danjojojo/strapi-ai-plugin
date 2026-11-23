import { Box, Textarea } from '@strapi/design-system';
import styled from 'styled-components';
import { TEXTAREA } from '../../constants';
import { useTextarea } from '../../hooks/useTextarea';
import { useChatContext } from '../../provider/ChatProvider';

const StyledBox = styled(Box)`
  width: 100%;

  & > div,
  & > div:focus-within {
    border: none !important;
    box-shadow: none !important;
    border-radius: 8px;
  }

  & > div > textarea {
    border-radius: 8px;
  }
`;

export function ChatTextInput() {
  const { message } = useChatContext();
  const { ref, onResize, onEnter } = useTextarea();

  return (
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
        border="none"
      />
    </StyledBox>
  );
}
