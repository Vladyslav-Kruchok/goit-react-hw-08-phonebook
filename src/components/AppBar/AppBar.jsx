import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
//Style
import { Header, Nav } from './AppBar.styled';

const AppBar = () => { 
    return (
        <Header>
            <Nav>
                <Navigation />
                <AuthNav />
                <UserMenu />
            </Nav>
        </Header>
    );
};

export default AppBar;