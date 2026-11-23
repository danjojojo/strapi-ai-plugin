import { type ChangeEvent, useRef } from 'react';
import { TEXTAREA } from '../constants';
import { useChatContext } from '../provider/ChatProvider';

export function useTextarea() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { allowedToSend, setMessage, submitMessage } = useChatContext();

  const textareaHeight = {
    update: () => {
      const element = ref.current;
      if (!element) return;

      element.style.height = 'auto';
      element.style.height = `${Math.max(element.scrollHeight, TEXTAREA.MIN_HEIGHT)}px`;
    },
    reset: () => {
      const element = ref.current;
      if (!element) return;

      element.style.height = `${TEXTAREA.MIN_HEIGHT}px`;
    },
  };

  function onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (allowedToSend) {
        submitMessage();
        textareaHeight.reset();
      }
    }
  }

  function onResize(event: ChangeEvent<HTMLTextAreaElement>) {
    const message = event.target.value;
    setMessage(message);

    if (message === '') {
      textareaHeight.reset();
    } else {
      textareaHeight.update();
    }
  }

  return {
    ref,
    onEnter,
    onResize,
  };
}
