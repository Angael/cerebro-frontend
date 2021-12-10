import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from './drawer/Drawer';
import Navbar from './navbar/Navbar';
import { Box, BoxProps, useMediaQuery } from '@mui/material';
import { DRAWER_WIDTH } from '../utils/consts';
import { useLocation } from 'react-router';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const showStaticDrawer = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.up('lg'),
  );

  const history = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [showStaticDrawer, history.pathname]);

  const paddingLeft = showStaticDrawer ? DRAWER_WIDTH + 'px' : 0;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: `column`,
        minHeight: '100vh',
        paddingLeft,
      }}
    >
      <nav>
        <Navbar
          showStaticDrawer={showStaticDrawer}
          onToggleDrawer={() => setOpen((s) => !s)}
        />
        <Drawer
          showStaticDrawer={showStaticDrawer}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </nav>
      {children}
    </Box>
  );
};

export default Layout;
