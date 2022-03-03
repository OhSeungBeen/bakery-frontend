import Head from 'next/head';

type Props = {
  title: string;
};
const Seo: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>Bakery | {title}</title>
    </Head>
  );
};

export default Seo;
