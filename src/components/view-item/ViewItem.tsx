import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Alert, Box } from '@mui/material';

import { API } from '../../utils/axios';
import { IFrontItem } from '../../model/IFrontItem';
import { FileType, IItem } from '../../model/IItem';
import ViewImage from './image/ViewImage';
import { ViewItemProps } from './ViewitemProps';
import ViewItemActionBar from './action-bar/ViewItemActionBar';

type Props = {};

const fetchItem = async (id: string) => {
  const response = await API.get(`/items/item/${id}`);
  return response.data as IFrontItem;
};

// TODO refactor into shared file
type ComponentMap = {
  [any: string]: React.FunctionComponent<ViewItemProps>;
};

const components: ComponentMap = {
  [FileType.image]: ViewImage,
};

const ViewItem: FunctionComponent<Props> = ({}) => {
  const { id = '' } = useParams();
  const item = useQuery<IFrontItem, AxiosError>(
    [`item`, id],
    () => fetchItem(id),
    {
      retry: 0,
    },
  );

  const is404 = item.error?.response?.status === 404;

  let Component;
  if (item.data) {
    const type = item.data.fileData?.type;
    if (type && components[type]) {
      Component = components[type];
    }
  }

  return (
    <Box>
      <ViewItemActionBar item={item?.data} />
      {is404 && <Alert severity='error'>Item not found</Alert>}
      {Component && <Component item={item.data!} />}
    </Box>
  );
};

export default React.memo(ViewItem);
