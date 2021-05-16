import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

enum ButtonColor {
  green = 'green',
  blue = 'blue',
  yellow = 'yellow',
}

enum ButtonSize {
  large = 'large',
  middle = 'middle',
  small = 'small',
}

type ButtonColorType = keyof typeof ButtonColor;
type ButtonSizeType = keyof typeof ButtonSize;

interface ButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  color: ButtonColorType;
  size: ButtonSizeType;
}

const Button: React.FC<ButtonProps> = ({ children, color, size, onClick }) => {
  return (
    <button type="button" className={cn(s.root, s[color], s[size])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
