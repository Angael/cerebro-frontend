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
import PageHeader from '../cmp-utils/PageHeader';
import { logIn, register } from '../../store/auth/authActions';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import { useNavigate } from 'react-router';
import { authErrorMap } from './authErrorMap';
import AuthError from './AuthError';

interface IProps {
  fetching: boolean;
  onOk: (email: string, password: string) => void;
  isRegistration: boolean;
}

const LoginInputs = ({ fetching, onOk, isRegistration }: IProps) => {
  const auth = useStore($auth);
  const { state } = auth;
  const isLoggedIn = state === AuthState.loggedIn;

  // register email and passwords
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  // TODO more validation
  const passwordsMatch = password === password2;

  const onSubmit = () => {
    if (!(isRegistration && !passwordsMatch)) {
      onOk(email, password);
    }
  };

  return (
    <Stack sx={{ gap: 2, alignItems: 'start' }}>
      <TextField
        name='email'
        label='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        label='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {isRegistration && (
        <TextField
          label='Repeat password'
          type='password'
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          helperText={!passwordsMatch ? "Passwords don't match" : ''}
        />
      )}
      <LoadingButton
        variant='outlined'
        onClick={onSubmit}
        loading={fetching}
        disabled={isRegistration && !passwordsMatch}
      >
        {isRegistration ? 'Create account' : 'Log in'}
      </LoadingButton>
    </Stack>
  );
};

export default LoginInputs;
