import React, { useEffect, useState } from 'react';
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

  if (!error) {
    return null;
  }

  return (
    <Alert severity='error'>
      <Typography>
        {(authErrorMap.get(persistentErr) || persistentErr) ?? 'Unknown error'}
      </Typography>
    </Alert>
  );
};

export default React.memo(AuthError);
