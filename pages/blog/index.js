import Header from '../../components/Header';
import Head from 'next/head';

function Blog() {
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
        <title>My blog</title>
      </Head>
      <Header />
      <h1>Welcome, blog reader!</h1>
      <p>
        Placeat error doloribus aperiam sed! Rerum pariatur temporibus quam?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
        perferendis dolorum accusamus doloremque deserunt nobis!
      </p>
    </>
  );
}

export default Blog;
