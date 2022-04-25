import React from 'react';
import { Drawer as MuiDrawer } from '@mui/material';
import DrawerContent from './DrawerContent';
import { DRAWER_WIDTH } from '../../utils/consts';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: IProps) => {
  return (
    <MuiDrawer
      variant='temporary'
      open={isOpen}
      onClose={onClose}
      PaperProps={{ sx: { width: DRAWER_WIDTH } }}
    >
      <DrawerContent />
    </MuiDrawer>
  );
};

export default React.memo(Drawer);
