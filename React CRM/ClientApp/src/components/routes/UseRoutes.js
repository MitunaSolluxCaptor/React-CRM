import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Nui from '../pages/Nui';

export const useRoutes = () => {

    return (
        <Routes>       
            <Route path="/" element={<Nui />} />
            <Route path="/Nui" element={<Nui />} />
            <Route path="/login" element={<Login />} />  
        </Routes>
    )
}

export default useRoutes