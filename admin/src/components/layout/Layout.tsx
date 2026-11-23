import { Flex } from '@strapi/design-system';
import styled from 'styled-components';
import type { ChildrenWrapper } from '../../types/ui.types';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

const StyledFlex = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export function Layout({ children }: ChildrenWrapper) {
  return (
    <StyledFlex>
      <Sidebar />
      <Main>{children}</Main>
    </StyledFlex>
  );
}
