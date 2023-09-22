import React, { useState } from 'react';
import { loginUser } from '../firebase';
import { Button, TextField, Typography, Container, Paper, Box, Snackbar, Alert } from '@mui/material';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((user) => {
        setSuccess('Login success!');
        navigate('/user');
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="Login" />
      </Box>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              marginTop: '10px',
              backgroundColor: 'var(--heading-clr)',
            }}
          >
            Login
          </Button>

          <Box position="absolute" top="100%" mt={2} width="100%">
            {error && (
              <Snackbar
                open={Boolean(error)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert severity="error" sx={{ marginTop: '50px' }}>
                  {error}
                </Alert>
              </Snackbar>
            )}
            {success && (
              <Snackbar
                open={Boolean(success)}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert severity="success" sx={{ marginTop: '50px' }}>
                  {success}
                </Alert>
              </Snackbar>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
