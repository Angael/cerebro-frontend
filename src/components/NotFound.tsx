import React from 'react';
import Layout from './Layout';
import { Box, Container, Divider, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiAlert, mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';

interface IProps {}

const NotFound = (props: IProps) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Icon path={mdiAlert} size={2.5} color={theme.palette.warning.main} />
      <Box component="header">
        <Typography variant="h1" color="textSecondary">
          <Typography
            variant="h1"
            sx={{ color: 'warning.main', display: 'inline' }}
          >
            404
          </Typography>{' '}
          - Page not found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
