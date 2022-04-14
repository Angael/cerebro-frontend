import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { API } from '../../utils/axios';
import { IFrontItem } from '../../model/IFrontItem';
import {  useQuery } from 'react-query';
import { Alert } from '@mui/material';
import { AxiosError } from 'axios';
import { IItem } from '../../model/IItem';

type Props = {};

const fetchItem = async (id: string) => {
  const response = await API.get(`/items/item/${id}`);
  return response.data as IFrontItem;
};

const ViewItem: FunctionComponent<Props> = ({}) => {
  const { id = '' } = useParams();
  const item = useQuery<IItem, AxiosError>([`item`, id], () => fetchItem(id), {
    retry: 0,
  });

  const is404 = item.error?.response?.status === 404;
  return (
    <div>
      {is404 && <Alert severity='error'>Item not found</Alert>}
      id: {id}{' '}
      <div>
        <pre>{JSON.stringify(item.data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default React.memo(ViewItem);
