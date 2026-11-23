import { Flex } from '@strapi/design-system';
import styled from 'styled-components';
import type { Theme } from '../../types/ui.types';
import { SidebarHeader } from '../sidebar/SidebarHeader';
import { SidebarList } from '../sidebar/SidebarList';

const StyledSidebar = styled(Flex)`
  border-right: 1px solid ${({ theme }: Theme) => theme.colors.neutral150};
  height: 100vh;
  width: 231px;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }: Theme) => theme.colors.neutral0};
`;

export function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarHeader />
      <SidebarList />
    </StyledSidebar>
  );
}
