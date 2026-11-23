import { useChatContext } from '../provider/ChatProvider';
import { type ChangeEvent } from 'react';
import { TEXTAREA } from '../constants';

export function useTextarea() {
  const { message, setMessage, submitMessage } = useChatContext();

  function onEnter(event: KeyboardEvent) {
    if (message === '') return;
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitMessage();
    }
  }

  function onResize(event: ChangeEvent<HTMLTextAreaElement>) {
    const element = event.target;
    element.style.height = 'auto';
    element.style.height = `${Math.max(element.scrollHeight, TEXTAREA.MIN_HEIGHT)}px`;
    setMessage(element.value);
  }

  return {
    onEnter,
    onResize,
  };
}
