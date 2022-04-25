import React from 'react';
import { Box, Divider, IconButton, Stack } from '@mui/material';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiAccountSettings,
  mdiBookmarkMultiple,
  mdiCompass,
  mdiMenu,
  mdiSearchWeb,
  mdiStar,
  mdiViewGrid,
} from '@mdi/js';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NAV_HEIGHT } from '../../utils/consts';

interface IProps {
  onToggleDrawer: () => void;
}

const Container = styled.div`
  padding: 8px;
  @media (min-width: 600px) {
    padding-right: 18px;
  }
`;

const Navbar = ({ onToggleDrawer }: IProps) => {
  return (
    <Container>
      <Stack direction='row' sx={{ gap: '1px' }}>
        <Box sx={{ flex: 1 }}>
          <IconButton onClick={onToggleDrawer}>
            <Icon path={mdiMenu} size={1} />
          </IconButton>
        </Box>

        <IconButton component={NavLink} to='/explore'>
          <Icon path={mdiCompass} size={1} />
        </IconButton>
        <IconButton component={NavLink} to='/browse'>
          <Icon path={mdiViewGrid} size={1} />
        </IconButton>
        <IconButton component={NavLink} to='/favs'>
          <Icon path={mdiStar} size={1} />
        </IconButton>
        <IconButton component={NavLink} to='/library'>
          <Icon path={mdiBookmarkMultiple} size={1} />
        </IconButton>
        <IconButton component={NavLink} to='/account'>
          <Icon path={mdiAccount} size={1} />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Navbar;
