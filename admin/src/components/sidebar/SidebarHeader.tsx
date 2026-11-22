import { Flex, Typography } from '@strapi/design-system';
import styled from 'styled-components';
import type { Theme } from '../../types/global.types';

const StyledSidebarHeader = styled(Flex)`
  border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.neutral150};
  padding: 0px 20px;
  min-height: 57px;
  width: 100%;
  flex-direction: row;
`;

export function SidebarHeader() {
  return (
    <StyledSidebarHeader>
      <Typography variant="beta">Strapi AI</Typography>
    </StyledSidebarHeader>
  );
}
