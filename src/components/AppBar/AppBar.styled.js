import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
`;
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`; 
export const Link = styled(NavLink)`
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
        color: violet;
    }
`;
export const NavSection = styled.div`
    display: flex;
    align-items: center;
`;