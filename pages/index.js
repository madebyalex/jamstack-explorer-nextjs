import Header from '../components/Header';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='description' content='Test website built with Next.js' />
        <title>Home</title>
      </Head>
      <Header />
      <h1>Welcome home, Explorer!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
        perferendis dolorum accusamus doloremque deserunt nobis placeat error
        doloribus aperiam sed! Rerum pariatur temporibus quam?
      </p>
    </>
  );
}

export default Home;
