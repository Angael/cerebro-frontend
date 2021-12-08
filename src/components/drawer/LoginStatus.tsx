import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import CustomCollapse from '../cmpUtils/CustomCollapse';
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';

interface IProps {}

const LoginStatus = (props: IProps) => {
  const [l, sl] = useState(false);

  const username = 'Angeal98';
  const email = 'krzysztofwidacki@gmail.com';

  useEffect(() => {
    setTimeout(() => sl(true), 1000);
  }, []);

  return (
    <CustomCollapse isOpen={l}>
      <Box
        sx={{
          borderRadius: 1.5,
          // bgcolor: 'background.neutral',
          border: 1,
          // borderColor: 'primary.main',
          borderColor: 'grey.300',
          // borderWidth: 1,
          px: 2,
          py: 1,
          '&:hover': { borderColor: 'grey.400' },
          // ,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">{username}</Typography>
          <IconButton>
            <Icon path={mdiLogout} size={1} />
          </IconButton>
        </Stack>
      </Box>
    </CustomCollapse>
  );
};

export default LoginStatus;
