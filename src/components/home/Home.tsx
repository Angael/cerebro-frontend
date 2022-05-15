import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';
import PageHeader from '../cmp-utils/PageHeader';

interface IProps {}

const Home = (props: IProps) => {
  return (
    <Container maxWidth='md'>
      <PageHeader
        icon={
          <Icon
            path={mdiCloud}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
        h1='Cerebro'
        caption='Private network for sharing / exploring / storing media'
      />

      <Divider sx={{ my: 4 }} />
      <Typography my={3} variant='body1' color='textPrimary'>
        A work in progress site, for sharing mostly legal and unsuspicious stuff
      </Typography>
    </Container>
  );
};

export default Home;
