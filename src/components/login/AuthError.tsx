import React, { useEffect, useState } from 'react';
import CustomCollapse from '../cmpUtils/CustomCollapse';
import { Alert, Typography } from '@mui/material';
import { authErrorMap } from './authErrorMap';

interface IProps {
  error: string | null | undefined;
}

const AuthError = ({ error }: IProps) => {
  const [persistentErr, setTxt] = useState<string>(error || '');

  useEffect(() => {
    if (error) {
      setTxt(error);
    }
  }, [error]);

  return (
    <CustomCollapse isOpen={!!error}>
      <Alert severity='error'>
        <Typography>
          {(authErrorMap.get(persistentErr) || persistentErr) ??
            'Unknown error'}
        </Typography>
      </Alert>
    </CustomCollapse>
  );
};

export default React.memo(AuthError);
