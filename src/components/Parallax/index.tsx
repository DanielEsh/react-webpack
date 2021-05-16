import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPoketballPng from './assets/PokeBall1.png';
import CloudsPng from './assets/Clouds.png';
import Poketball from './assets/Pokeball2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div
        style={{
          transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)`,
        }}>
        <img src={SmallPoketballPng} alt="" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)`,
        }}>
        <img src={CloudsPng} alt="" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={Poketball} alt="" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="" />
      </div>
    </div>
  );
};

export default Parallax;
