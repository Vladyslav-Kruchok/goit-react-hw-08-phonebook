import { Link, NavSection } from '../AppBar.styled';

const AuthNav = () => { 
    return (
        <NavSection>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </NavSection>
    );
};

export default AuthNav;