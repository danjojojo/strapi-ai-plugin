import { Box, Textarea } from '@strapi/design-system';
import styled from 'styled-components';

const StyledTextarea = styled(Textarea)`
  textarea {
    min-height: 1rem !important;
  }
`;

const StyledBox = styled(Box)`
  width: 100%;
`;

export function ChatInput() {
  return (
    <StyledBox>
      <StyledTextarea />
    </StyledBox>
  );
}
