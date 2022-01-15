import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import FilesPreview from './files-preview/FilesPreview';
import { ExtendedFile, UploadStatusEnum } from '../../interfaces/extendedFile';
import { useStore } from 'effector-react';
import { $upload, uploadApi, uploadQueue } from '../../store/upload/$upload';
import { API_uploadFile } from '../../store/upload/uploadActions';

interface IProps {
  open: boolean;
  onClose: () => any;
}

const UploadDialog = ({ open = false, onClose }: IProps) => {
  const upload = useStore($upload);

  const onDelete = (id: string) => uploadApi.removeFile(id);

  const handleChangeFileImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }

    const files: ExtendedFile[] = Array.from(event.target.files).map(
      (file) => ({
        file,
        id: uuidv4(),
        previewSrc: URL.createObjectURL(file),
        uploadProgress: 0,
        uploadStatus: UploadStatusEnum.notStarted,
      }),
    );

    uploadApi.addFiles(files);
  };

  const handleUpload = () => {
    upload.files.forEach((file) => {
      uploadQueue.add(() => API_uploadFile({ file, dir: '', private: false }));
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ '.MuiDialog-paper': { minWidth: '70vw' } }}
    >
      <DialogTitle>Upload files to: /default</DialogTitle>
      <DialogContent>
        Files: {upload.files.length}
        <Box>
          <FilesPreview files={upload.files} onDelete={onDelete} />
        </Box>
      </DialogContent>
      <DialogActions>
        {upload.files.length > 0 && (
          <Button onClick={handleUpload} variant='contained' color='secondary'>
            Upload
          </Button>
        )}
        {upload.files.length > 0 && (
          <Button
            onClick={() => uploadApi.clearFiles()}
            variant='outlined'
            color='error'
          >
            Clear
          </Button>
        )}
        <label htmlFor='contained-button-file' style={{ marginLeft: 8 }}>
          <input
            key={upload.files.length}
            multiple
            type='file'
            id='contained-button-file'
            style={{ display: 'none' }}
            onChange={handleChangeFileImage}
          />
          <Button variant='outlined' component='span'>
            Add files...
          </Button>
        </label>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
