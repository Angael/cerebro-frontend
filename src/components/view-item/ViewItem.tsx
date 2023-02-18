import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Alert, Box } from '@mui/material';

import { API } from '../../utils/axios';
import ViewImage from './image/ViewImage';
import ViewItemActionBar from './action-bar/ViewItemActionBar';
import { queryClient } from '../../App';
import ViewVideo from './video/ViewVideo';
import { FrontItem } from '@vanih/cerebro-contracts';

type Props = {};

const fetchItem = async (id: string) => {
  const response = await API.get(`/items/item/${id}`);
  return response.data as FrontItem;
};

const components = {
  IMAGE: ViewImage,
  VIDEO: ViewVideo,
} as const;

const ViewItem: FunctionComponent<Props> = ({}) => {
  const { id = '' } = useParams();
  const item = useQuery<FrontItem, AxiosError>(
    [`item`, id],
    () => fetchItem(id),
    {
      retry: 0,
      initialData: () =>
        queryClient
          .getQueryData<FrontItem[]>('items')
          ?.find((item: FrontItem) => Number(item.id) === Number(id)),
    },
  );

  const is404 = item.error?.response?.status === 404;

  let Component;
  if (item.data) {
    const type = item.data.type;
    if (type && components[type]) {
      Component = components[type];
    }
  }

  return (
    <Box>
      <ViewItemActionBar item={item?.data} />
      {is404 && <Alert severity='error'>Item not found</Alert>}
      {/* TODO to get rid of ts-ignore change into many ifs?*/}
      {Component && (
        <Component
          // @ts-ignore
          item={item.data!}
        />
      )}
    </Box>
  );
};

export default React.memo(ViewItem);
