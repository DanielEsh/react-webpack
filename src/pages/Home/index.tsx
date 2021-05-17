import React from 'react';

import Header from '../../components/Header';

import s from './Home.module.scss';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">Find all your favorite Pokemon</Heading>

          <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>

          <Button color="green" size="large">
            Test
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
