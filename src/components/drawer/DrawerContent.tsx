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

interface IProps {}

const DrawerContent = (props: IProps) => {
  // const [o, so] = useState(true);

  const theme = useTheme();
  useEffect(() => {
    // @ts-ignore
    window.theme = theme;
  });

  return (
    <Box p={2}>
      <DrawerLogo />
      {/*<Button onClick={() => so((s) => !s)}>toggle</Button>*/}
      <motion.div
        initial="collapsed"
        animate="open"
        variants={VARIANTS.drawer}
        transition={TRANSITIONS.drawer}
      >
        <Stack direction={'column'} alignContent={'start'}>
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
