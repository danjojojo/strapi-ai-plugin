import { useEffect, useState } from 'react';
import type { Chat } from '../types/global.types';
import { useRouting } from './useRouting';

const chats: Chat[] = [
  {
    name: 'Test title',
    uid: 'zrv5o35k1m2o023e1emcra8p',
  },
];

export function useChats() {
  const { chatUid } = useRouting();
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  function selectChat(chat: Chat) {
    setSelectedChat(chat);
  }

  useEffect(() => {
    const matched = chats.find((chat) => chat.uid === chatUid);
    if (matched) {
      selectChat(matched);
    }
  }, [chatUid]);

  return {
    chats,
    selectChat,
    selectedChat,
  };
}
