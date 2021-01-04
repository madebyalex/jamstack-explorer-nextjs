import Header from '../../components/Header';
import Head from 'next/head';

function About({ pokemon }) {
  return (
    <>
      <Head>
        <html lang='en' />
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Test website built with Next.js' />
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <Header />
      <h1>About {pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt='' />
      <p>
        {pokemon?.name} is necessitatibus totam excepturi in. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Magnam, accusamus! A error
        voluptates sit fuga illum laboriosam porro dicta saepe minima officia
        labore ipsam culpa, incidunt blanditiis consectetur, iusto aperiam
        tempora.
      </p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default About;
