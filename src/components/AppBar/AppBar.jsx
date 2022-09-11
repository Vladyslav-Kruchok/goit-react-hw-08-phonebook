import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
//Style
import { Header, Nav } from './AppBar.styled';

const AppBar = () => {
    //store
    const auth = useSelector(authSelectors.auth);

    return (
        <Header>
            <Nav>
                <Navigation />
                {(!auth.isLogIn)
                    ? <AuthNav />
                    : <UserMenu />}
            </Nav>
        </Header>
    );
};

export default AppBar;
