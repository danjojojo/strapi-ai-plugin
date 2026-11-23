import { IconButton } from '@strapi/design-system';
import { PaperPlane } from '@strapi/icons';
import { useChatContext } from '../../provider/ChatProvider';

export function ChatButtons() {
  const { allowedToSend, submitMessage } = useChatContext();
  return (
    <IconButton label="Send" disabled={!allowedToSend} onClick={submitMessage} variant="primary">
      <PaperPlane />
    </IconButton>
  );
}
