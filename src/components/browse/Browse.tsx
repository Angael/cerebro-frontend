import React from 'react';
import { Container } from '@mui/material';
import Icon from '@mdi/react';
import { mdiFolder } from '@mdi/js';
import PageHeader from '../cmpUtils/PageHeader';
import { useTheme } from '@mui/material/styles';
import ItemGrid from './item-grid/ItemGrid';

interface IProps {}

const Browse = (props: IProps) => {
  return (
    <Container maxWidth="md">
      <PageHeader
        icon={
          <Icon
            path={mdiFolder}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
        h1="Browse"
        caption="Videos, photos, websites, notes"
      />
      <ItemGrid />
    </Container>
  );
};

export default Browse;
