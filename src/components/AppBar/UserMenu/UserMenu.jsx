import { Link, NavSection } from '../AppBar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
    const dispatch = useDispatch();
    //store
    const user = useSelector(authSelectors.getUser);
    const auth = useSelector(authSelectors.auth);
    
    const onClickLogOut = () => {
        dispatch(authOperations.axiosLogOut(auth.token));

    }
    return (
        <NavSection>
            <label>{user.name}</label>
            <Link to="/contacts">Contacts</Link>
            <button onClick={onClickLogOut}>Logout</button>
        </NavSection>
    );
};

export default UserMenu;