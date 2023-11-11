import { Container, CssBaseline, Box, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { LoginForm } from '@/features/auth/LoginForm';
import { useAuthForm } from '@/hooks';

export const Login = () => {
  const { formState, handleInputChange, handleSubmit } = useAuthForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm email={formState.email} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};
