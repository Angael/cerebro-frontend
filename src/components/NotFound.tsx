import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiAlertOutline } from '@mdi/js';
import palette from '../theme/palette';
import { useLocation } from 'react-router';

interface IProps {}

const NotFound = (props: IProps) => {
  const path = useLocation();
  return (
    <Container maxWidth='md' sx={{ pt: 4 }}>
      <Stack alignItems='center'>
        <Icon path={mdiAlertOutline} size={2} color={palette.warning.main} />
        <Typography variant='h2'>Page not found</Typography>
        <Typography variant='body1' color='textSecondary'>
          {path.pathname}
        </Typography>
      </Stack>
    </Container>
  );
};

export default NotFound;
