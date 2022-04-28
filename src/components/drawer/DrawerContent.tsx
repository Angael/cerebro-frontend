import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';

import DrawerLogo from './DrawerLogo';
import LoginStatus from './LoginStatus';
import { $auth, AuthState } from '../../store/auth/$auth';

const stackProps = {
  direction: 'column',
  alignContent: 'start',
  gap: 0.5,
} as any;

interface IProps {}

const DrawerContent = (props: IProps) => {
  const { state } = useStore($auth);
  const isLoggedIn = state === AuthState.loggedIn;

  return (
    <Box sx={{ p: 2, flex: 1 }}>
      <DrawerLogo />
      <Box my={1}>
        <LoginStatus />
      </Box>
      <Stack {...stackProps}>
        <Button component={NavLink} to={'/home'}>
          Home
        </Button>
        <Button component={NavLink} to={'/browse'}>
          Browse
        </Button>
        {!isLoggedIn && (
          <Stack {...stackProps}>
            <Button component={NavLink} to={'/login'}>
              Login / Register
            </Button>
          </Stack>
        )}
        {isLoggedIn && (
          <Stack {...stackProps}>
            <Button component={NavLink} to={'/my-library'}>
              My library
            </Button>
            <Button component={NavLink} to={'/browse-libraries'}>
              Browse libraries
            </Button>
            <Button component={NavLink} to={'/favourites'}>
              Favourites
            </Button>
            <Button component={NavLink} to={'/settings'}>
              Settings
            </Button>
            <Button component={NavLink} to={'/store'}>
              Store
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default DrawerContent;
