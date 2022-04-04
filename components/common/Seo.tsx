import Head from 'next/head';

interface SeoProps {
  title: string;
}

export const Seo: React.FC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>Bakery | {title}</title>
    </Head>
  );
};
