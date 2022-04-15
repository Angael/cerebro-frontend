import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Alert } from '@mui/material';

import { API } from '../../utils/axios';
import { IFrontItem } from '../../model/IFrontItem';
import { FileType, IItem } from '../../model/IItem';
import ViewImage from './image/ViewImage';

type Props = {};

const fetchItem = async (id: string) => {
  const response = await API.get(`/items/item/${id}`);
  return response.data as IFrontItem;
};

const components = {
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

  let component: React.ReactElement;
  if (item.data) {
    const type = item.data.fileData?.type;
    if (type === FileType.image) {
      component = <ViewImage item={item.data} />;
    }
  }

  return (
    <div>
      {is404 && <Alert severity='error'>Item not found</Alert>}
      id: {id}{' '}
      <div>
        <pre>{JSON.stringify(item.data, null, 2)}</pre>
        {/*@ts-ignore */}
        {component}
      </div>
    </div>
  );
};

export default React.memo(ViewItem);
