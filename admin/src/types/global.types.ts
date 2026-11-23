import type { DefaultTheme } from 'styled-components';

export type Theme = { theme: DefaultTheme };
export type ChildrenWrapper = { children: React.ReactNode };

export interface Chat {
  name: string;
  uid: string;
}