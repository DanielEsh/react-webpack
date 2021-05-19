import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/EmptyPage';

const MENU_ITEMS = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/docs',
    component: () => <EmptyPage title="Documentation" />,
  },
];

const routes = MENU_ITEMS.reduce((acc: any, item: any) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
