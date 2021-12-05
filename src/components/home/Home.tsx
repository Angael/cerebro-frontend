import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';

interface IProps {}

const Home = (props: IProps) => {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box
        mt={10}
        pb={5}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Icon path={mdiCloud} size={2.5} color={theme.palette.primary.main} />
        <Box component="header">
          <Typography variant="h1" color="textPrimary">
            Cerebro
          </Typography>
          <Typography mt={-1} variant="body1" color="textSecondary">
            Private network for sharing / exploring / storing media
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Typography my={3} variant="body1" color="textPrimary">
        A work in progress site, for sharing mostly legal and unsuspicious stuff
      </Typography>
    </Container>
  );
};

export default Home;
