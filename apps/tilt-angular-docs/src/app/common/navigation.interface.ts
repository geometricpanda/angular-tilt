import {IconDefinition} from '@fortawesome/fontawesome-common-types';

export interface MenuItem {
  url: string;
  title: string;
  type: 'link' | 'routerlink';
  icon: IconDefinition;
}

export type MenuItems = Array<MenuItem>;
