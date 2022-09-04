//React
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//Style
import { Container } from '../style/Container.styled';

//Dynamic import
const AppBar = lazy(() => import('components/AppBar/AppBar.jsx' /* webpackChunkName: "AppBar" */));

const LayoutView = () => { 
    return (
        <Container>        
            <Suspense>
                <AppBar />
            </Suspense>
            <Outlet />
        </Container>
    );
};

export default LayoutView;