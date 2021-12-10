import React, { useEffect } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import DrawerLogo from './DrawerLogo';
import {
  TRANSITIONS,
  transitionSpring,
  VARIANTS,
} from '../../framer/transitions';
import { NavLink } from 'react-router-dom';
import LoginStatus from './LoginStatus';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import CustomCollapse from '../cmpUtils/CustomCollapse';

const stackProps = {
  direction: 'column',
  alignContent: 'start',
  gap: 0.5,
} as any;

interface IProps {}

const DrawerContent = (props: IProps) => {
  const { state } = useStore($auth);
  const isLoggedIn = state === AuthState.loggedIn;

  const theme = useTheme();
  useEffect(() => {
    // @ts-ignore
    window.theme = theme;
  });

  return (
    <Box sx={{ p: 2, flex: 1 }}>
      <motion.div
        initial='collapsed'
        animate='open'
        variants={VARIANTS.drawer}
        transition={TRANSITIONS.drawer}
      >
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
          <CustomCollapse isOpen={!isLoggedIn}>
            <Stack {...stackProps}>
              <Button component={NavLink} to={'/login'}>
                Login / Register
              </Button>
            </Stack>
          </CustomCollapse>
          <CustomCollapse isOpen={isLoggedIn}>
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
          </CustomCollapse>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default DrawerContent;
