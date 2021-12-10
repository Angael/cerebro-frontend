import React, { useState } from 'react';
import {
  Alert,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Icon from '@mdi/react';
import { mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';
import PageHeader from '../cmpUtils/PageHeader';
import { logIn, register } from '../../store/auth/authActions';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import { useNavigate } from 'react-router';
import CustomCollapse from '../cmpUtils/CustomCollapse';

const Login = () => {
  const navigate = useNavigate();
  const auth = useStore($auth);
  const { state } = auth;
  const isLoggedIn = state === AuthState.loggedIn;

  const [err, setErr] = useState<string | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  // register email and passwords
  const [e1, setE1] = useState<string>('');
  const [p1, setP1] = useState<string>('');
  const [p2, setP2] = useState<string>('');

  // login email and password
  const [e2, setE2] = useState<string>('');
  const [p3, setP3] = useState<string>('');

  const handleRegister = () => {
    setFetching(true);
    register(e1, p1)
      .then(() => navigate('/home'))
      .catch(setErr)
      .finally(() => setFetching(false));
  };

  const handleLogin = () => {
    setFetching(true);
    logIn(e2, p3)
      .then(() => navigate('/home'))
      .catch(setErr)
      .finally(() => setFetching(false));
  };

  // TODO more validation
  const passwordsMatch = p1 === p2;

  return (
    <Container maxWidth="md">
      <PageHeader
        icon={
          <Icon
            path={mdiCloud}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
        h1="Login"
        caption="Sign in or sign up for an account here!"
      />

      <Divider sx={{ my: 4 }} />
      <CustomCollapse isOpen={!!err}>
        <Alert severity="error">Wystąpił błąd.</Alert>
      </CustomCollapse>
      <CustomCollapse isOpen={isLoggedIn}>
        <Typography variant="h2">You are logged in!</Typography>
        <Typography variant="caption">Why are you still here?</Typography>
      </CustomCollapse>
      <CustomCollapse isOpen={!isLoggedIn}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              sx={{ gap: 2, alignItems: 'start', m: 3 }}
            >
              <Typography variant="h3">Register</Typography>
              <TextField
                name="email"
                label="Email"
                type="email"
                onChange={(e) => setE1(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                onChange={(e) => setP1(e.target.value)}
              />
              <TextField
                label="Repeat password"
                type="password"
                onChange={(e) => setP2(e.target.value)}
                helperText={!passwordsMatch ? "Passwords don't match" : ''}
              />
              <LoadingButton
                onClick={handleRegister}
                loading={fetching}
                disabled={!passwordsMatch}
              >
                Create account
              </LoadingButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              sx={{ gap: 2, alignItems: 'start', m: 3 }}
            >
              <Typography variant="h3">Login</Typography>
              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={(e) => setE2(e.target.value)}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                onChange={(e) => setP3(e.target.value)}
              />
              <LoadingButton onClick={handleLogin} loading={fetching}>
                Login
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </CustomCollapse>
    </Container>
  );
};

export default Login;
