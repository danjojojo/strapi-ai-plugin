import { useEffect, useState } from 'react';
import { chatsService } from '../services/chats.service';
import type { Chat } from '../types/data.types';
import { useRouting } from './useRouting';

export function useChats() {
  const { chatUid } = useRouting();
  const { fetchChats } = chatsService();

  const [chats, setChats] = useState<Chat[] | null>(null);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  function selectChat(chat: Chat) {
    setSelectedChat(chat);
  }

  async function getChats() {
    const chats = await fetchChats();
    if (chats?.data) {
      setChats(chats?.data);
    }
  }

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    const matched = chats?.find((chat) => chat.documentId === chatUid);
    if (matched) {
      selectChat(matched);
    }
  }, [chats, chatUid]);

  return {
    chats,
    selectChat,
    selectedChat,
  };
}
