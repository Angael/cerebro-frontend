import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from './drawer/Drawer';
import Navbar from './navbar/Navbar';
import { Box, BoxProps, useMediaQuery } from '@mui/material';
import { DRAWER_WIDTH } from '../utils/consts';
import { useLocation } from 'react-router';

interface IProps extends BoxProps {
  children: React.ReactNode;
}

const Layout = ({ children, ...boxProps }: IProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const showStaticDrawer = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.up('lg'),
  );

  const history = useLocation();
  console.log(history);

  useEffect(() => {
    setOpen(false);
  }, [showStaticDrawer, history.pathname]);

  return (
    <div>
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
      <Box
        sx={{
          paddingTop: 10,
          paddingLeft: showStaticDrawer ? DRAWER_WIDTH + 'px' : 0,
          minHeight: '100vh',
        }}
      >
        <Box {...boxProps}>{children}</Box>
      </Box>
    </div>
  );
};

export default Layout;
