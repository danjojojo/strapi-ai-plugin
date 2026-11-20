import { Flex, Typography } from '@strapi/design-system';
import styled from 'styled-components';
import type { Theme } from '../../types/global.types';

const StyledSidebarHeader = styled(Flex)`
  border-bottom: 1px solid ${({ theme }: Theme) => theme.colors.neutral150};
`;

export function SidebarHeader() {
  return (
    <StyledSidebarHeader
      paddingLeft="20px"
      paddingRight="20px"
      minHeight="57px"
      width="100%"
      direction="row"
    >
      <Typography variant="beta">Strapi AI</Typography>
    </StyledSidebarHeader>
  );
}
