import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { ChangeEvent } from 'react';

export type loginDto = {
  email: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const LoginForm = ({ email, onSubmit, onInputChange }: loginDto) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        value={email}
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={onInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={onInputChange}
      />
      <FormControlLabel sx={{ width: '100%' }} control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};
