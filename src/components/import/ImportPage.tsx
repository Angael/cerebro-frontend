import React from 'react';
import { Container } from '@mui/material';
import PageHeader from '../cmp-utils/PageHeader';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { useTheme } from '@mui/material/styles';

const ImportPage = () => {
  return (
    <Container maxWidth='xl'>
      <PageHeader
        h1='Import images and videos'
        caption='Advanced importing and uploading page'
        icon={
          <Icon
            path={mdiPlus}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
      />
    </Container>
  );
};

export default ImportPage;
