import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface IProps {
  icon: ReactNode;
  h1: ReactNode;
  caption: ReactNode;
}

const PageHeader = (props: IProps) => {
  return (
    <Box
      mt={10}
      pb={5}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 3,
      }}
    >
      {props.icon}
      <Box component="header">
        <Typography variant="h1" color="textPrimary" display="inline-block">
          {props.h1}
        </Typography>
        <Typography mt={-1} variant="body1" color="textSecondary">
          {props.caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageHeader;
