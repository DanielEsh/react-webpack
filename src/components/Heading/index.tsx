import React from 'react';

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  return React.createElement(`${type}`, {}, children);
};

export default Heading;
