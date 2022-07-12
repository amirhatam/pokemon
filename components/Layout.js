import React from 'react'
import Head from 'next/Head'


export default function Layout({ title, children }) {
    return (
        <div className='bg-sky-300'>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container mx-auto max-w-7xl pt-8 min-h-screen'>
                {children}
            </main>
        </div>
    )
}
