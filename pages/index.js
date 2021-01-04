import Header from '../components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/about/');
  };

  return (
    <>
      <Head>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Test website built with Next.js'
        ></meta>
        <title>Home</title>
      </Head>
      <Header />
      <h1>Welcome home, Explorer!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
        perferendis dolorum accusamus doloremque deserunt nobis placeat error
        doloribus aperiam sed! Rerum pariatur temporibus quam?
      </p>
      <p>
        <button onClick={handleClick}>Click me!</button>
      </p>
    </>
  );
}

export default Home;
