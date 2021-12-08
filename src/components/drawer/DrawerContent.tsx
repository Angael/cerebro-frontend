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

interface IProps {}

const DrawerContent = (props: IProps) => {
  // const [o, so] = useState(true);

  const theme = useTheme();
  useEffect(() => {
    // @ts-ignore
    window.theme = theme;
  });

  return (
    <Box sx={{ p: 2, flex: 1 }}>
      <motion.div
        initial="collapsed"
        animate="open"
        variants={VARIANTS.drawer}
        transition={TRANSITIONS.drawer}
      >
        <DrawerLogo />
        <Box my={1}>
          <LoginStatus />
        </Box>
        <Stack direction={'column'} alignContent={'start'} gap={0.5}>
          <Button component={NavLink} to={'/home'}>
            Home
          </Button>
          <Button component={NavLink} to={'/browse'}>
            Browse
          </Button>
          <Button component={NavLink} to={'/login'}>
            Login / Register
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default DrawerContent;
