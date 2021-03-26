import Link from 'next/link';

import { Wrapper, Brand } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Link href="/">
                <Brand>Header</Brand>
            </Link>
        </Wrapper>
    );
};

export default Header;
