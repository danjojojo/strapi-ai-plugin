import { Flex, Typography } from '@strapi/design-system';

interface SidebarListTitleProps {
  title: string;
}

export function SidebarListTitle({ title }: SidebarListTitleProps) {
  return (
    <Flex width="100%" justifyContent="space-between" paddingLeft="20px" paddingRight="20px">
      <Typography variant="sigma" textColor="neutral400">
        {title}
      </Typography>
    </Flex>
  );
}
