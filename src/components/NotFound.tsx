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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        m: 5,
      }}
    >
      <Box component="header">
        <Typography variant="h2" color="textSecondary">
          <Box display="span" sx={{ color: 'warning.main', display: 'inline' }}>
            404
          </Box>{' '}
          Page not found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
