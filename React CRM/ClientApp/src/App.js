import React from 'react';
import useRoutes from './components/routes/UseRoutes';
import './custom.css';

function App (){
    const routes = useRoutes();

    return (
        <>
            {routes}
        </>
    );
}

export default App
