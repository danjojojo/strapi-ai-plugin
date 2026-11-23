import { Page } from '@strapi/strapi/admin';
import { Route, Routes } from 'react-router-dom';
import { ChatPage } from './pages/ChatPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<ChatPage />} />
      <Route path="/chats/:chatId" element={<ChatPage />} />
      <Route path="*" element={<Page.Error />} />
    </Routes>
  );
}
