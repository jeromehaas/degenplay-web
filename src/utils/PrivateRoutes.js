import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from "context/app-context";



const PrivateRoutes = () => {
    
    const value = useContext(AppContext);  
    const { isLoggedIn } = value;

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );

};

export default PrivateRoutes;