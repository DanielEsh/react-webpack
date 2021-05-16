import React from 'react';

import Header from '../../components/Header';

import s from './Home.module.scss';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>
        <h1>Find all your favorite Pokemon</h1>

        <h3>You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
        <Button>Test</Button>
      </div>
    </div>
  );
};

export default HomePage;
