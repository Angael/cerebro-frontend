import React, { useState } from 'react';
import { Box, Fab, SpeedDial, SpeedDialAction } from '@mui/material';
import Icon from '@mdi/react';
import {
  mdiFileUploadOutline,
  mdiLink,
  mdiNoteEdit,
  mdiPlus,
  mdiUpload,
} from '@mdi/js';
import { useStore } from 'effector-react';
import { $auth, AuthState } from '../../store/auth/$auth';
import UploadDialog from './UploadDialog';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;

enum ModalType {
  text,
  link,
  upload,
}

const AddFab = () => {
  const { state } = useStore($auth);
  const isLoggedIn = state === AuthState.loggedIn;

  const [dialog, setDialog] = useState<{ type: ModalType; open: boolean }>({
    type: ModalType.text,
    open: false,
  });
  const onOpen = (type: ModalType) => setDialog({ type, open: true });
  const onClose = () => setDialog({ ...dialog, open: false });

  return isLoggedIn ? (
    <>
      <UploadDialog
        open={dialog.open && dialog.type === ModalType.upload}
        onClose={onClose}
      />

      <Container>
        <SpeedDial
          ariaLabel='SpeedDial basic example'
          icon={<Icon path={mdiPlus} size={1} />}
          direction='left'
        >
          <SpeedDialAction
            icon={<Icon path={mdiUpload} size={1} />}
            tooltipTitle='Upload files'
            onClick={() => onOpen(ModalType.upload)}
          />
          <SpeedDialAction
            icon={<Icon path={mdiLink} size={1} />}
            tooltipTitle='Add link'
            onClick={() => onOpen(ModalType.link)}
          />
          <SpeedDialAction
            icon={<Icon path={mdiNoteEdit} size={1} />}
            tooltipTitle='Add text post'
            onClick={() => onOpen(ModalType.text)}
          />
        </SpeedDial>
      </Container>
    </>
  ) : null;
};

export default AddFab;
