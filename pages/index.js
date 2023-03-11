import Dashboard from '@/components/Dashboard';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Omah Visual Kamera</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Dashboard />
    </>
  );
};

export default Home;
