import { useRootStore } from '@/providers/RootStoreProvider';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
  const navigation = useNavigate();
  const { authStore } = useRootStore();
  const handleClick = () => {
    authStore.logout();
    navigation('/login');
  };
  return (
    <Container>
      <h1>Orders</h1>
      <Button onClick={() => handleClick()}>Logout</Button>
    </Container>
  );
};
