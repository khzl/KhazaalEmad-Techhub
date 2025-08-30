import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/useAuth';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/products" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
