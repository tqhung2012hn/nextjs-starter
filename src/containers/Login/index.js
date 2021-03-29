import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { HOME_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/Auth';

import { Wrapper, Form } from './styles';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user, setUser } = useAuth();

    useEffect(() => {
        if (user) router.push(HOME_ROUTE);
    }, [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setUser({ email, password });
        }, 1000);
    };

    const handleChange = (event) => {
        if (event.target.id === 'email') {
            setEmail(event.target.value);
        } else if (event.target.id === 'password') {
            setPassword(event.target.value);
        }
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <br />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <br />
                <Button block disabled={!email || !password} loading={loading}>
                    Login
                </Button>
            </Form>
        </Wrapper>
    );
};

export default Login;
