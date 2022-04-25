import React, { useEffect, useState } from 'react';
import Drawer from './drawer/Drawer';
import Navbar from './navbar/Navbar';
import { Box, BoxProps, useMediaQuery } from '@mui/material';
import { DRAWER_WIDTH, NAV_HEIGHT } from '../utils/consts';
import { useLocation } from 'react-router';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  height: ${NAV_HEIGHT};
  width: 100vw;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px) saturate(1.5);
`;

const Layout = ({ children }: IProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const history = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [history.pathname]);

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - ${NAV_HEIGHT}px)`,
        paddingTop: NAV_HEIGHT + 'px',
      }}
    >
      <Nav>
        <Navbar onToggleDrawer={() => setOpen((s) => !s)} />
        <Drawer isOpen={open} onClose={() => setOpen(false)} />
      </Nav>
      {children}
    </Box>
  );
};

export default Layout;
