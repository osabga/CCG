import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

interface PrivateRouteProps {
  children: ReactNode;
  tipeUser?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, tipeUser }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    if (!tipeUser || decodedToken.role === tipeUser) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error('Invalid token:', error);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
