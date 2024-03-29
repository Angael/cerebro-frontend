import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

interface IProps {
  icon: ReactNode;
  h1: ReactNode;
  caption: ReactNode;
}

const height = 100;

const MyContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  height: ${height}px;

  padding: 20px;
`;

const PageHeader = (props: IProps) => {
  return (
    <MyContainer>
      {props.icon}
      <Box component='header'>
        <Typography variant={'h1'} color='textPrimary' display='inline-block'>
          {props.h1}
        </Typography>

        <Typography mt={-1} variant='body1' color='textSecondary'>
          {props.caption}
        </Typography>
      </Box>
    </MyContainer>
  );
};

export default PageHeader;
