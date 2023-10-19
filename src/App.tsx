import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routerConfig } from './router';

import './App.css';

const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
