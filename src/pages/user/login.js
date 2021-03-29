import Head from 'next/head';

import Login from '@/containers/Login';

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    );
}
