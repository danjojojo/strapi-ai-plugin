export default {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/chats',
      handler: 'chats.getChats',
      config: {
        policies: [],
      },
    },
  ],
};
