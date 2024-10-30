import { UiHeadingSize } from '../../ui-heading';
import { UiButtonSize, UiButtonStyle } from '../../ui-button';
import { UiTheme } from '../../models';

export const uiThemes: UiTheme[] = ['primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'];

export const uiButtonStyles: UiButtonStyle[] = ['solid', 'outline', 'inline'];

export const uiButtonSize: UiButtonSize[] = ['xl', 'lg', 'md', 'sm', 'xs'];

export const uiHeadingSize: UiHeadingSize[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export interface NavLink {
  path: string;
  name: string;
  root?: true;
}

export const navLinks: NavLink[] = [
  {
    path: `action-messages`,
    name: 'Action messages',
  },
  {
    path: `alerts`,
    name: 'Alerts',
  },
  {
    path: `badges`,
    name: 'Badges',
  },
  {
    path: `buttons`,
    name: 'Buttons',
  },
  {
    path: `calendar`,
    name: 'Calendar',
  },
  {
    path: `data-display`,
    name: 'Data display',
  },
  {
    path: `dialogs`,
    name: 'Dialogs',
  },
  {
    path: `dropdowns`,
    name: 'Dropdowns',
  },
  {
    path: `forms`,
    name: 'Forms',
  },
  {
    path: `headings`,
    name: 'Headings',
  },
  {
    path: `icons`,
    name: 'Icons',
  },
  {
    path: `layouts`,
    name: 'Layouts',
  },
  {
    path: `loading`,
    name: 'Loading',
  },
  {
    path: `paginator`,
    name: 'Paginator',
  },
  {
    path: `panels`,
    name: 'Panels',
  },
  {
    path: `stats`,
    name: 'Statistics',
  },
  {
    path: `tables`,
    name: 'Tables',
  },
];
