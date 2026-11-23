import { Box, LinkButton, Typography } from '@strapi/design-system';
import React, { memo, type MouseEvent } from 'react';

interface SidebarListItemProps {
  active: boolean;
  href: string;
  label: string;
  onClick: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function SidebarListItemBase({
  active,
  href,
  label,
  onClick,
  startIcon,
  endIcon,
}: SidebarListItemProps) {
  return (
    <Box
      width="100%"
      maxWidth="207px"
      borderRadius="4px"
      background={active ? 'neutral100' : undefined}
    >
      <LinkButton
        variant="ghost"
        width="100%"
        justifyContent="flex-start"
        href={href}
        onClick={onClick}
        paddingLeft="8px"
        startIcon={startIcon}
        endIcon={endIcon}
      >
        <Typography
          variant="omega"
          textAlign="left"
          width="100%"
          textColor={active ? 'primary600' : 'neutral1000'}
          fontWeight={active ? 600 : 400}
        >
          {label}
        </Typography>
      </LinkButton>
    </Box>
  );
}

export const SidebarListItem = memo(SidebarListItemBase);
