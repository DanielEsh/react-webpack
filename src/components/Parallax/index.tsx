import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPoketballPng from './assets/PokeBall1.png';
import Cloud1Png from './assets/Cloud1.png';
import Cloud2Png from './assets/Cloud2.png';
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
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={SmallPoketballPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={Cloud1Png} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={Cloud2Png} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)`,
        }}>
        <img src={Poketball} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)`,
        }}>
        <img src={PikachuPng} alt="Pikachu" />
      </div>
    </div>
  );
};

export default Parallax;
