import React from 'react';
import { IconButton } from '@mui/material';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import styled from 'styled-components';

interface IProps {
  showStaticDrawer: boolean;
  onToggleDrawer: () => void;
}

const Container = styled.div`
  position: sticky;
  padding: 8px;
`;

const Navbar = ({ showStaticDrawer, onToggleDrawer }: IProps) => {
  return !showStaticDrawer ? (
    <Container>
      <IconButton onClick={onToggleDrawer}>
        <Icon path={mdiMenu} size={1} />
      </IconButton>
    </Container>
  ) : null;
};

export default Navbar;
