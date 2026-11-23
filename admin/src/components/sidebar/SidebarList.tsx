import { Flex, ScrollArea } from '@strapi/design-system';
import styled from 'styled-components';
import { useRouting } from '../../hooks/useRouting';
import { useChatsContext } from '../../provider/ChatsProvider';
import { appendToChatsPath } from '../../utils/routing';
import { SidebarListItem } from './SidebarListItem';
import { SidebarListTitle } from './SidebarListTitle';

const ListsWrapper = styled(Flex)`
  flex-direction: column;
  padding: 16px 0px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

const ListWrapper = styled(Flex)`
  flex-direction: column;
  gap: 3px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 24px;
`;

export function SidebarList() {
  const { selectedChat, chats } = useChatsContext();
  const { overrideNavigate } = useRouting();

  return (
    <ScrollArea>
      <ListsWrapper>
        <SidebarListTitle title="Chats" />
        <ListWrapper>
          {chats.map((chat, index) => (
            <SidebarListItem
              key={index}
              label={chat.name}
              href={appendToChatsPath(chat)}
              active={selectedChat === chat}
              onClick={(e) => {
                overrideNavigate(appendToChatsPath(chat), e);
              }}
            />
          ))}
        </ListWrapper>
      </ListsWrapper>
    </ScrollArea>
  );
}
