import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/Link';

export default function pokemon({ pokeman }) {
    // console.log(pokeman);

    return (
        <Layout title={pokeman.name}>

            <div className='mx-auto max-w-xl bg-white rounded-lg py-10'>

                <div className="grid grid-rows-3 grid-flow-colcol-span-2">
                    <h1 className='text-4xl text-center capitalize'>{pokeman.name} </h1>
                </div>

                <div className="grid grid-rows-2 grid-flow-col gap-2">
                    <div className="row-span-3 ">
                        <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
                    </div>

                    <div className="row-span-2 col-span-2 ">
                        <div>
                            <span className=' text-2xl mt-6 mb-2 pr-4'><strong> Weight :</strong> {pokeman.weight}</span>
                            <span className=' text-2xl mt-6 mb-2'><strong> Height :</strong> {pokeman.height}</span>
                        </div>

                        <div >
                            <h2 className='text-2xl mt-6 mb-2'>Types :    </h2>
                            {
                                pokeman.types.map((t, i) => (
                                    <p className='capitalize text-sm pl-2 py-1' key={i}>- {t.type.name} </p>
                                ))
                            }
                        </div>

                        <div >
                            <h2 className='text-2xl mt-6 mb-2'>Abilities :    </h2>
                            {
                                pokeman.abilities.map((e, i) => (
                                    <p className='capitalize text-sm pl-2 py-1' key={i}>- {e.ability.name}</p>
                                ))
                            }
                        </div>

                    </div>
                </div>

                <div className="col-span-2 mt-10">
                    <p className='text-center'>
                        <Link href='/'>
                            <a className='text-2xl underline'>&laquo;Home</a>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman = await res.json();
        const paddedId = ('00' + (id)).slice(-3);

        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        pokeman.image = image;
        return {
            props: { pokeman },
        }

    } catch (error) {

    }

}