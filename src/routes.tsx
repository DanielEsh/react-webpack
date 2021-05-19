import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/EmptyPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCS = '/docs',
}

const MENU_ITEMS = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCS,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const routes = MENU_ITEMS.reduce((acc: any, item: any) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
