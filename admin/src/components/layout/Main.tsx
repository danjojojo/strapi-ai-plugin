import { Flex, Main as SDSMain } from '@strapi/design-system';
import styled from 'styled-components';
import type { ChildrenWrapper } from '../../types/global.types';

const StyledMain = styled(SDSMain)`
  height: 100vh;
  flex: 1;
`;

export function Main({ children }: ChildrenWrapper) {
  return (
    <StyledMain>
      <Flex direction="column" height="inherit" width="inherit">
        {children}
      </Flex>
    </StyledMain>
  );
}
