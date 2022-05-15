import React, { FunctionComponent } from 'react';
import { LinearProgress, Typography } from '@mui/material';
import { API } from '../../../utils/axios';
import { ILimits } from '../../../model/ILimits';
import { useQuery } from 'react-query';
import numeral from 'numeral';

type Props = {};

const fetchLimits = async () => {
  const response = await API.get('/account/limits');
  return response.data as ILimits;
};

const UsedSpace: FunctionComponent<Props> = ({}) => {
  const limits = useQuery('accountLimits', fetchLimits);

  const variant = limits.isFetched ? 'determinate' : 'indeterminate';

  const value = limits.data
    ? (100 * limits.data.bytes.used) / limits.data.bytes.max
    : 0;

  return (
    <div>
      <Typography color='textSecondary' align='right' sx={{}}>
        {numeral(limits.data?.bytes.used).format('0.00 b')} /{' '}
        {numeral(limits.data?.bytes.max).format('0.00 b')}
      </Typography>
      <LinearProgress variant={variant} value={value} />
    </div>
  );
};

export default React.memo(UsedSpace);
