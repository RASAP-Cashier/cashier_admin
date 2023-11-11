import { Layout } from '@/layout/layout';
import { Navigate, RouteProps, useLocation } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  isAuth: boolean;
};

export const ProtectedRoute = ({ isAuth }: PrivateRouteProps) => {
  const location = useLocation();

  return isAuth ? <Layout /> : <Navigate to="/login" state={{ from: location }} replace />;
};
