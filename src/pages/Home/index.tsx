import React from 'react';

import Header from '../../components/Header';

import s from './Home.module.scss';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>
        <Heading type="h1">Find all your favorite Pokemon</Heading>

        <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>

        <Button>Test</Button>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
