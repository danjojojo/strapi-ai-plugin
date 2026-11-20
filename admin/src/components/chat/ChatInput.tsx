import { Box, Textarea } from '@strapi/design-system';
import styled from 'styled-components';

const StyledTextarea = styled(Textarea)`
  textarea {
    min-height: 1rem !important;
  }
`;

export function ChatInput() {
  return (
    <Box width="100%">
      <StyledTextarea />
    </Box>
  );
}
