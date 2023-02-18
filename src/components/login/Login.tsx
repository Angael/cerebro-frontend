import React, { useState } from 'react';
import { Button, Container, Divider, Stack, Typography } from '@mui/material';

import Icon from '@mdi/react';
import { mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';
import PageHeader from '../cmp-utils/PageHeader';
import { logIn, register } from '../../store/auth/authActions';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import { useNavigate } from 'react-router';
import AuthError from './AuthError';
import LoginInputs from './LoginInputs';

const Login = () => {
  const navigate = useNavigate();
  const auth = useStore($auth);
  const { state } = auth;
  const isLoggedIn = state === AuthState.loggedIn;

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  const onRegister = (email: string, password: string) => {
    setErr(null);
    setFetching(true);
    register(email, password)
      .then(() => navigate('/home'))
      .catch((e) => setErr(e.code))
      .finally(() => setFetching(false));
  };

  const onLogin = (email: string, password: string) => {
    setErr(null);
    setFetching(true);
    logIn(email, password)
      .then(() => navigate('/home'))
      .catch((e) => setErr(e.code))
      .finally(() => setFetching(false));
  };

  return (
    <Container maxWidth='md'>
      <PageHeader
        icon={
          <Icon
            path={mdiCloud}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
        h1='Login'
        caption='Sign in or sign up for an account here!'
      />

      <Divider sx={{ my: 4 }} />

      {isLoggedIn && (
        <>
          <Typography variant='h2'>You are logged in!</Typography>
          <Typography variant='caption'>Why are you still here?</Typography>
        </>
      )}

      <Stack direction='row' justifyContent='center'>
        <Stack gap={1}>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ gap: 2 }}
          >
            <Typography variant='h3'>
              {isLogin ? 'Login' : 'Register'}
            </Typography>
            <Button onClick={() => setIsLogin((v) => !v)}>
              {isLogin ? 'register' : 'login'}
            </Button>
          </Stack>

          {!isLoggedIn && (
            <LoginInputs
              fetching={fetching}
              onOk={isLogin ? onLogin : onRegister}
              isRegistration={!isLogin}
            />
          )}

          <AuthError error={err} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
