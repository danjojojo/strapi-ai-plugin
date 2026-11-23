import { Flex, Main as SDSMain } from '@strapi/design-system';
import styled from 'styled-components';
import type { ChildrenWrapper } from '../../types/ui.types';

const StyledMain = styled(SDSMain)`
  height: 100vh;
  flex: 1;
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  height: inherit;
  width: inherit;
`;

export function Main({ children }: ChildrenWrapper) {
  return (
    <StyledMain>
      <StyledFlex>{children}</StyledFlex>
    </StyledMain>
  );
}
