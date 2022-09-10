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

/**
    * name: Emma Bond
    * email: masijy@mailinator.com
    * password: Pa$$w0rd!
    
    * name: Dominique Watson
    * email: ziwifokezo@mailinator.com
    * password: Pa$$w0rd!
    * 
    * name: Domini Wat
    * email: domini.wat@mailinator.com
    * password: Pa$$w0rd!Dom
    * 
    * name: Vladyslav Go
    * email: vladyslav.go@gmail.com
    * password: Pa$$w0rd!
 */