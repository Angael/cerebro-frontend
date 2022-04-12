import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

interface IProps {
  icon: ReactNode;
  h1: ReactNode;
  caption: ReactNode;
}

const MyContainer = styled('div')`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  z-index: 1;
  margin: 60px 0;
  padding: 20px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px) saturate(1.5);
`;

// TODO: make it smaller when sticky gets stickied: https://stackoverflow.com/a/57991537
const PageHeader = (props: IProps) => {
  return (
    <MyContainer>
      {props.icon}
      <Box component='header'>
        <Typography variant='h1' color='textPrimary' display='inline-block'>
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
