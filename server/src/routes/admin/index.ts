import chats from './chats';

export default () => ({
  type: 'admin',
  routes: [...chats.routes],
});
