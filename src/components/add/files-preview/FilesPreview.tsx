import React from 'react';
import { ExtendedFile } from '../../../model/extendedFile';
import FilePreview from './FilePreview';
import { Box, styled } from '@mui/material';
import FilesStats from './FilesStats';

const MyGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  width: '100%',
  gap: 16,
  padding: '16px 0',
  justifyContent: 'center',
  gridAutoRows: 200,
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
}));

interface IProps {
  files: ExtendedFile[];
  onDelete: (id: string) => void;
}

const FilesPreview = ({ files, onDelete }: IProps) => {
  return (
    <Box>
      <MyGrid>
        {files.map((file) => (
          <FilePreview file={file} key={file.id} onDelete={onDelete} />
        ))}
      </MyGrid>
      <FilesStats files={files} />
    </Box>
  );
};

export default FilesPreview;
