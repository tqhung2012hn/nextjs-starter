import Head from 'next/head';

import Login from '@/containers/Login';
import AuthLayout from '@/layouts/AuthLayout';

export default function LoginPage() {
    return (
        <AuthLayout>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </AuthLayout>
    );
}
