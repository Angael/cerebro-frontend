import React, { useState } from 'react';
import { Container } from '@mui/material';
import Icon from '@mdi/react';
import { mdiFolder } from '@mdi/js';
import PageHeader from '../cmpUtils/PageHeader';
import { useTheme } from '@mui/material/styles';
import ItemGrid from './item-grid/ItemGrid';
import AddFab from '../add/AddFAB';
import { useQuery } from 'react-query';
import { API } from '../../utils/axios';
import { IFrontItem } from '../../model/IFrontItem';

interface IProps {}

const fetchItems = async () => {
  const response = await API.get('/items');
  return response.data as IFrontItem[];
};

const Browse = (props: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  console.log({ selectedIndex });

  const items = useQuery('items', fetchItems, { refetchOnWindowFocus: false });

  const onSelectItem = (id: number) => {
    setSelectedIndex(selectedIndex === id ? null : id);
    // TODO: Router navigate to /item/:id
    console.log('selecting id', id);
  };

  return (
    <>
      <PageHeader
        icon={
          <Icon
            path={mdiFolder}
            size={2.5}
            color={useTheme().palette.primary.main}
          />
        }
        h1='Browse'
        caption='Videos, photos, websites, notes'
      />
      <Container maxWidth='lg'>
        {items.data && (
          <ItemGrid
            items={items.data}
            isFetching={items.isFetching}
            onSelectItem={onSelectItem}
          />
        )}
        <AddFab />
      </Container>
    </>
  );
};

export default Browse;
