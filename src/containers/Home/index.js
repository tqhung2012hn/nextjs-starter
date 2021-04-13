import { useRouter } from 'next/router';

import Button from '@/components/Button';
import { LOGIN_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/Auth';

import { Wrapper, Welcome, Text } from './styles';

const Home = () => {
    const { user, setUser } = useAuth();
    const router = useRouter();

    return (
        <Wrapper>
            <Welcome>Welcome to Home</Welcome>
            {user ? (
                <>
                    <Text>
                        Hi, <strong>{user.email}</strong>
                    </Text>
                    <Button
                        outline
                        onClick={() => {
                            setUser();
                            router.push(LOGIN_ROUTE);
                        }}
                    >
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <Text>You are not authenticated</Text>

                    <Button outline onClick={() => router.push(LOGIN_ROUTE)}>
                        Login
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Home;
