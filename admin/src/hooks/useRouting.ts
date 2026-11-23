import type { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { stripPath } from '../utils/routing';

export function useRouting() {
  const params = useParams();
  const navigate = useNavigate();

  const path = params['*']?.split('/');
  const chatUid = path?.[1];

  const overrideNavigate = (url: string, e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (e) e.preventDefault();
    navigate(stripPath(url));
  };

  return {
    chatUid,
    overrideNavigate,
  };
}
