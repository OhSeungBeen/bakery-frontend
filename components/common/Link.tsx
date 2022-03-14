import React from 'react';
import LinkBase from 'next/link';
import Image from 'next/image';

interface LinkProps {
  path: string;
  activePath: string;
  icons: {
    normal: string;
    acitve: string;
  };
}

export const Link: React.FC<LinkProps> = ({ path, icons, activePath }) => {
  const isFocussed = path === activePath;

  return (
    <LinkBase passHref href={path}>
      <Image src={isFocussed ? icons.acitve : icons.normal} alt={path} />
    </LinkBase>
  );
};
