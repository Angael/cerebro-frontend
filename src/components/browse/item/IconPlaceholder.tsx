import React, { forwardRef, FunctionComponent } from 'react';
import { styled } from '@mui/material';
import Icon from '@mdi/react';

type Props = {
  iconPath: string;
};

const Container = styled('div')({
  display: 'block',
  margin: 'auto',
  width: '100%',
  height: '100%',
});

const IconPlaceholder: React.ForwardRefExoticComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ iconPath }, ref) => {
  return (
    <Container ref={ref}>
      <Icon path={iconPath} size={1} />
    </Container>
  );
});

export default React.memo(IconPlaceholder);
