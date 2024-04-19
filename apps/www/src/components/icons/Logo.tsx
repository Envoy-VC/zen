import React from 'react';

import { cn } from '~/lib/utils';

import LogoImage from '~/assets/logo.png';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

const Logo = ({ size = 24, className, ...props }: Props) => {
  return (
    <img
      src={LogoImage}
      alt='Logo'
      width={size}
      height={size}
      className={cn('h-fit', className)}
      {...props}
    />
  );
};

export default Logo;
