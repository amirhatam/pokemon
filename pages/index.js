import Layout from "../components/Layout";
import Head from 'next/Head';
import Link from 'next/Link';


export default function Home(pokemon) {
  // console.log(pokemon.pokemon);

  return (
    <Layout title="List of Pokemon">
      <h1 className="text-4xl mb-8 text-center">List of Pokemon</h1>

      <div className="grid grid-cols-4 gap-4">

        {pokemon.pokemon.map((p, i) => (
          <div key={i}>

            <Link href={`/pokemon?id=${i + 1}`}>
              <a className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-white rounded-md" >
                <img className="w-20 h-20 mr-3" src={p.image} alt={p.name} />
                <span className="mr-2 font-bold">{i + 1} -</span>
                {p.name}
              </a>
            </Link>

          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const { results } = await res.json();

    const pokemon = results.map((pokeman, index) => {
      const paddedId = ('00' + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
