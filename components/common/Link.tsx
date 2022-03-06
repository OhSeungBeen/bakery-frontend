import React from 'react';
import LinkBase from 'next/link';
import Image from 'next/image';

type Props = {
  path: string;
  activePath: string;
  icons: {
    normal: string;
    acitve: string;
  };
};
const Link: React.FC<Props> = ({ path, icons, activePath }) => {
  const isFocussed = path === activePath;

  return (
    <LinkBase passHref href={path}>
      <Image src={isFocussed ? icons.acitve : icons.normal} alt={path} />
    </LinkBase>
  );
};

export default Link;
