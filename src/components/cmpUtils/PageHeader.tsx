import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import clsx from 'clsx';

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
  height: 100px;
  margin: 60px 0;
  padding: 20px;

  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px) saturate(1.5);

  //transition: 1s;
  //&.isSticky {
  //  margin: 30px 0;
  //  padding: 10px 20px;
  //}
`;

const useIsSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-3px 0px 0px 0px',
      },
    );

    observer.observe(cachedRef);

    // unmount
    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return [isSticky, ref];
};

// TODO: make it smaller when sticky gets stickied: https://stackoverflow.com/a/57991537
const PageHeader = (props: IProps) => {
  const [isSticky, ref] = useIsSticky();

  return (
    <MyContainer ref={ref as any} className={clsx({ isSticky })}>
      {props.icon}
      <Box component='header'>
        <Typography
          variant={isSticky ? 'h4' : 'h1'}
          color='textPrimary'
          display='inline-block'
        >
          {props.h1}
        </Typography>
        {!isSticky && (
          <Typography mt={-1} variant='body1' color='textSecondary'>
            {props.caption}
          </Typography>
        )}
      </Box>
    </MyContainer>
  );
};

export default PageHeader;
