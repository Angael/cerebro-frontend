import React from 'react';
import { Container } from '@mui/material';
import ItemGrid from './item-grid/ItemGrid';
import AddFab from '../add/AddFAB';
import { useQuery } from 'react-query';
import { API } from '../../utils/axios';
import { IFrontItem } from '../../model/IFrontItem';
import { useNavigate } from 'react-router';

interface IProps {}

const fetchItems = async () => {
  const response = await API.get('/items');
  return response.data as IFrontItem[];
};

const Browse = (props: IProps) => {
  const navigate = useNavigate();

  const items = useQuery('items', fetchItems, {
    refetchInterval: 5 * 60 * 1000,
  });

  const onSelectItem = (id: number) => {
    navigate(`/item/${id}`);
  };

  return (
    <>
      <Container maxWidth='xl'>
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
