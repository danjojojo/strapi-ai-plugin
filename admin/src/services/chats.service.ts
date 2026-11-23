import { useFetchClient } from '@strapi/strapi/admin';
import { PLUGIN } from '../constants';
import type { RequestParams } from '../types/fetch.types';
import type { ChatsResponse } from '../types/service.types';

export function chatsService() {
  const { get } = useFetchClient();

  function bindToPluginPath(url: string) {
    return `/${PLUGIN.ID}/${url}`;
  }

  return {
    async fetchChats(query: RequestParams = { query: {} }): Promise<ChatsResponse | undefined> {
      try {
        const res = await get(bindToPluginPath('chats'), { params: query });
        return res.data as ChatsResponse;
      } catch (error) {
        console.error(error);
      }
    },
  };
}
