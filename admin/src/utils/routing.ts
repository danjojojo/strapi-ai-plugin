import { PLUGIN } from '../constants';
import type { Chat } from '../types/data.types';

export const pluginPath = `/admin/${PLUGIN.DEFAULT_PATH}`;

export const appendToChatsPath = (chat: Chat): string => {
  return `${pluginPath}/chats/${chat.documentId}`;
};

export const stripPath = (url: string): string => {
  // use this for useNavigate, removes the /admin at the start
  return url.slice(6, url.length);
};
