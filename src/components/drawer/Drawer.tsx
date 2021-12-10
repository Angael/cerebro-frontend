import React from 'react';
import { Drawer as MuiDrawer } from '@mui/material';
import DrawerContent from './DrawerContent';
import { DRAWER_WIDTH } from '../../utils/consts';

interface IProps {
  showStaticDrawer: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ showStaticDrawer, isOpen, onClose }: IProps) => {
  return (
    <div>
      <MuiDrawer
        variant={showStaticDrawer ? 'permanent' : 'temporary'}
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          sx: { width: DRAWER_WIDTH },
        }}
      >
        <DrawerContent />
      </MuiDrawer>
    </div>
  );
};

export default React.memo(Drawer);
