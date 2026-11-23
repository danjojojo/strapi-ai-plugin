import { Flex } from '@strapi/design-system';
import { ChildrenWrapper } from '../../types/ui.types';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  width: 70%;
  height: inherit;
`;

export function ChatLayout({ children }: ChildrenWrapper) {
  return <StyledFlex>{children}</StyledFlex>;
}
