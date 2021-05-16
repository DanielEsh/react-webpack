import React from 'react';

import Header from '../../components/Header';

import s from './Home.module.scss';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>
        <Button>Test</Button>
      </div>
    </div>
  );
};

export default HomePage;
