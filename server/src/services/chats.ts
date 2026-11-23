import type { Core } from '@strapi/strapi';
import type { RequestParams } from '../types';

const chats = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getChats({ query }: RequestParams) {
    const context = strapi.requestContext.get();
    const user = context.state.user;

    const data = await strapi.documents('api::chat.chat').findMany({
      _q: query._q,
      sort: query.sort ?? 'createdAt:DESC',
      start: (query.page - 1) * query.pageSize,
      limit: query.pageSize,
      filters: {
        user: {
          email: user.email,
        },
      },
      fields: ['title'],
    });

    const total = await strapi.documents('api::chat.chat').count({
      _q: query._q,
      filters: {
        user: {
          email: user.email,
        },
      },
    });

    const payloadToReturn = {
      data,
      meta: {
        page: query.page,
        pageSize: query.pageSize,
        pageCount: Math.max(Math.ceil(total / query.pageSize), 1),
        total,
      },
    };
    return payloadToReturn;
  },
});

export default chats;
