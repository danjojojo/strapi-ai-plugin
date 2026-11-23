import { IconButton } from '@strapi/design-system';
import { PaperPlane } from '@strapi/icons';
import { useChatContext } from '../../provider/ChatProvider';

export function ChatButtons() {
  const { message, submitMessage } = useChatContext();
  return (
    <IconButton label="Send" disabled={message === ''} onClick={submitMessage}>
      <PaperPlane />
    </IconButton>
  );
}
