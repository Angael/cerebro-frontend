import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Input,
} from '@mui/material';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';

interface IProps {
  open: boolean;
  onClose: () => any;
}

const UploadDialog = ({ open = false, onClose }: IProps) => {
  const { state } = useStore($auth);
  const isLoggedIn = state === AuthState.loggedIn;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openAddModal = () => {};

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add / Upload content</DialogTitle>
      <DialogContent>
        <label htmlFor='contained-button-file'>
          <input
            multiple='true'
            type='file'
            id='contained-button-file'
            style={{ display: 'none' }}
          />
          <Button variant='contained' component='span'>
            Upload
          </Button>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
