import Head from 'next/head';

import Layout from '@/components/Layout';
import Home from '@/containers/Home';

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Home />
        </Layout>
    );
}
