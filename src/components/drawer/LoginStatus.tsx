import React, { useEffect } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import { logout } from '../../store/auth/authActions';

interface IProps {}

const LoginStatus = (props: IProps) => {
  const auth = useStore($auth);

  const { state, user } = auth;

  if (state !== AuthState.loggedIn) {
    return null;
  }

  return (
    <Box
      sx={{
        borderRadius: 1.5,
        // bgcolor: 'background.neutral',
        border: 1,
        // borderColor: 'primary.main',
        borderColor: 'grey.300',
        // borderWidth: 1,
        px: 2,
        py: 1,
        '&:hover': { borderColor: 'grey.400' },
        // ,
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='body1'>{user?.email}</Typography>
        <IconButton onClick={logout}>
          <Icon path={mdiLogout} size={1} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default LoginStatus;
