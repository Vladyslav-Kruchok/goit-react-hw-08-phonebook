import { Link, NavSection } from '../AppBar.styled';

const UserMenu = () => { 
    return (
        <NavSection>
            <label>User</label>
            <Link to="/contacts">Contacts</Link>
            <Link to="/logout">Logout</Link>
        </NavSection>
    );
};

export default UserMenu;