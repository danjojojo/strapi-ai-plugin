import { useState } from 'react';
import { useNotification } from '@strapi/strapi/admin';

export function useChat() {
  const [message, setMessage] = useState<string>('');
  const { toggleNotification } = useNotification();

  const allowedToSend = message.trim().length > 0;

  function resetMessage() {
    setMessage('');
  }

  function submitMessage() {
    if (!message) return;

    toggleNotification({
      message,
      type: 'info',
    });

    resetMessage();
  }

  return {
    message,
    allowedToSend,
    setMessage,
    submitMessage,
  };
}
