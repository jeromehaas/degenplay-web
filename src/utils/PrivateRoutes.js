import { Outlet, Navigate } from 'react-router-dom';
import cookie from 'react-cookies';
import { sha256 } from 'js-sha256';
 
const PrivateRoutes = () => {
    
	const token = cookie.load('session');
	const isLoggedIn = token === sha256(process.env.REACT_APP_LOGIN_CODE) ? true : false;
		
    return (
      isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );

};

export default PrivateRoutes;