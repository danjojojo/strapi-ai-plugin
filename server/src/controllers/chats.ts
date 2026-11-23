import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

const chats = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getChats(ctx: Context) {
    const { _q, sort, page, pageSize } = ctx.request.query;
    const safePage = Math.max(Number(page) || 1, 1);
    const safePageSize = Math.min(Number(pageSize) || 10, 100);

    ctx.body = await strapi
      .plugin('strapi-ai-plugin')
      .service('chats')
      .getChats({
        query: {
          _q,
          sort,
          page: safePage,
          pageSize: safePageSize,
        },
      });
  },
});

export default chats;
