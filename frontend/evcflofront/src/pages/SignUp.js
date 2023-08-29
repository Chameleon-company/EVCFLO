import React, { useState } from 'react';
import { debounce } from 'lodash';
import { signUpUser } from '../firebase';
import { Button, TextField, Typography, Container, Paper, Box, Snackbar, Alert } from '@mui/material';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();

    setError(null);

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    signUpUser(email, password)
      .then((user) => {
        setSuccess('Sign up successful! Please check your email for a verification link');
        console.log(user);
        navigate('/user');
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={4}>
        <Title title="EVCFLO" subTitle="SignUp" />
      </Box>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp} noValidate>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Sign Up
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
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

export default SignUp;
