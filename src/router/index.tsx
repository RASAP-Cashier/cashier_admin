import { Orders } from '@/pages/Orders';
import { Home } from '@/pages/Home';
import { Layout } from '@/layout/layout';
import { Login } from '@/pages/Login';

export const routerConfig = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
];
