import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';
import { useRootStore } from './providers/RootStoreProvider';
import { Box } from '@mui/material';

const App = () => {
  const { userStore, authStore } = useRootStore();
  const navigate = useNavigate();

  if (authStore.isAuth && !userStore.currentUser.id) {
    userStore.getUser().then(response => {
      if (!response) navigate('/login');
    });
  }

  return (
    <Box id="app" height="100%">
      <Routes>
        <Route element={<ProtectedRoute isAuth={authStore.isAuth} />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
};

export default App;
