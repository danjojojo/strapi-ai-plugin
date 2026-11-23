import { PLUGIN } from '../constants';
import type { Chat } from '../types/data.types';

const chatsPath = `/admin/${PLUGIN.DEFAULT_PATH}/chats`;

export const appendToChatsPath = (chat: Chat): string => {
  return `${chatsPath}/${chat.documentId}`;
};

export const stripPath = (url: string): string => {
  // use this for useNavigate, removes the /admin at the start
  return url.slice(6, url.length);
};
