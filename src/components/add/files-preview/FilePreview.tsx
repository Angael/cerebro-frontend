import React from 'react';
import numeral from 'numeral';
import { Button, CircularProgress, Stack, styled } from '@mui/material';
import { ExtendedFile, UploadStatusEnum } from '../../../model/extendedFile';

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: theme.palette.background.default,
}));

const BgImg = styled('img')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: 8,
  boxShadow: theme.shadows[8],
  backgroundColor: theme.palette.grey.A700,
  objectFit: 'cover',
  objectPosition: 'center',
  transition: '0.1s',
}));

const BgVid = styled('video')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: 8,
  boxShadow: theme.shadows[8],
  backgroundColor: theme.palette.grey.A700,
  objectFit: 'cover',
  objectPosition: 'center',
  transition: '0.1s',
}));

const Content = styled('div')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: 8,
  backgroundColor: 'rgba(255,255,255,0.3)',
  transition: '0.1s',
  'div:hover > &': {
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
}));

const TextLine = styled('p')(({ theme }) => ({
  margin: 0,
  padding: '0 8px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  textAlign: 'center',
  height: 'auto',
  whiteSpace: 'nowrap',
  lineBreak: 'anywhere',
  transition: '0.1s',
  backgroundColor: 'rgba(255,255,255,0.6)',
  borderRadius: 8,
}));

const CenteredLoader = styled(CircularProgress)({
  position: 'absolute',
  top: 'calc(50% - 30px)',
  left: 'calc(50% - 30px)',
  zIndex: 1,
});

interface IProps {
  file: ExtendedFile;
  onDelete: (id: string) => void;
}

const loadingColors = {
  [UploadStatusEnum.success]: 'success',
  [UploadStatusEnum.failed]: 'error',
  [UploadStatusEnum.started]: 'primary',
  [UploadStatusEnum.notStarted]: 'grey',
};

const FilePreview = ({ file, onDelete }: IProps) => {
  const isImage = file.file.type.indexOf('image') >= 0;
  const isVideo = file.file.type.indexOf('video') >= 0;
  const tooBig = file.file.size > 10_000_000;

  const sizeStr = numeral(file.file.size).format('0b');

  const showLoader = [
    UploadStatusEnum.started,
    UploadStatusEnum.success,
    UploadStatusEnum.failed,
  ].includes(file.uploadStatus);

  const color = loadingColors[file.uploadStatus] as
    | 'primary'
    | 'success'
    | 'error';

  return (
    <Container>
      {showLoader && (
        <CenteredLoader
          thickness={9}
          size={60}
          variant='determinate'
          value={file.uploadProgress}
          color={color}
        />
      )}

      {isImage && !tooBig && <BgImg src={file.previewSrc} />}
      {isVideo && !tooBig && (
        <BgVid controls={false}>
          <source src={file.previewSrc} type='video/mp4' />
        </BgVid>
      )}

      <Content>
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
          <Stack sx={{ gap: 1 }}>
            <TextLine title={file.file.name}>{file.file.name}</TextLine>
            <Stack sx={{ alignItems: 'flex-end' }}>
              <TextLine sx={{ display: 'inline-block' }}>{sizeStr}</TextLine>
            </Stack>
          </Stack>
          <Stack direction='row' justifyContent='space-between'>
            <Button
              variant='contained'
              component='a'
              href={file.previewSrc}
              target='_blank'
            >
              Open
            </Button>
            <Button
              variant='contained'
              color='error'
              onClick={() => onDelete(file.id)}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Content>
    </Container>
  );
};

export default React.memo(FilePreview);
