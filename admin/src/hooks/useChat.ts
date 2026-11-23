import { useState } from 'react';
import { useNotification } from '@strapi/strapi/admin';

export function useChat() {
  const [message, setMessage] = useState<string>('');
  const { toggleNotification } = useNotification();

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
    setMessage,
    submitMessage,
  };
}
