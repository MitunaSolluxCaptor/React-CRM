import { Route, Routes, Navigate } from 'react-router-dom';
import AccountSection from '../pages/AccountSection';
import Login from '../pages/Login';
import Nui from '../pages/Nui';

export const useRoutes = () => {

    return (
        <Routes>       
            <Route path="/" element={<Navigate to={`/Nui`} />} />
            <Route path="/Nui" element={<Nui />} >
                <Route index element={<iframe className="rickroll" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=bd6BRU8rXqnghneJ?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />} />
                <Route path="AccountSection" element={<AccountSection />} />
            </Route>
            <Route path="/login" element={<Login />} />  
        </Routes>
    )
}

export default useRoutes;