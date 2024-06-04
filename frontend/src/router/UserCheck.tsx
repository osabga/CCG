import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

interface PrivateRouteProps {
  children: ReactNode;
  tipeUser?: string;
}

interface DecodedToken {
  role: string;
  exp: number;
  // otras propiedades que tu token pueda tener
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, tipeUser }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    if (!tipeUser || decodedToken.role === tipeUser) {
      return children as React.ReactElement;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error('Invalid token:', error);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

