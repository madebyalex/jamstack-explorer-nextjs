import Header from '../components/Header';
import Head from 'next/head';

function About({ pokemon }) {
  return (
    <>
      <Head>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='description' content='Test website built with Next.js' />
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <Header />
      <h1>Welcome, {pokemon?.name} friend!</h1>
      <img src={pokemon?.sprites.front_default} alt='' />
      <p>
        Necessitatibus totam excepturi in. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Magnam, accusamus! A error voluptates sit
        fuga illum laboriosam porro dicta saepe minima officia labore ipsam
        culpa, incidunt blanditiis consectetur, iusto aperiam tempora.
      </p>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default About;
