import { Page } from '@strapi/strapi/admin';
import { Route, Routes } from 'react-router-dom';

import { ChatPage } from './pages/ChatPage';
import { NewChatPage } from './pages/NewChatPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<NewChatPage />} />
      <Route path="/chats/:chatId" element={<ChatPage />} />
      <Route path="*" element={<Page.Error />} />
    </Routes>
  );
}
