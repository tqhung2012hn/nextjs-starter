import Head from 'next/head';

import AppLayout from '@/layouts/AppLayout';
import Home from '@/containers/Home';

export default function HomePage() {
    return (
        <AppLayout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Home />
        </AppLayout>
    );
}
