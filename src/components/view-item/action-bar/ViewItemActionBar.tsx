import React, { FunctionComponent } from 'react';
import { IconButton, Stack, styled, Typography } from '@mui/material';
import palette from '../../../theme/palette';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useNavigate } from 'react-router';
import { IFrontItem } from '../../../model/IFrontItem';

type Props = {
  item?: IFrontItem;
};

const Container = styled('div')({
  borderBottom: `solid 1px ${palette.grey['50024']}`,
  padding: 8,
});

const ViewItemActionBar: FunctionComponent<Props> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack direction='row' alignItems='center' gap={1}>
        <IconButton onClick={() => navigate(-1)}>
          <Icon path={mdiArrowLeft} size={1} />
        </IconButton>
        <Typography>{item?.fileData?.filename}</Typography>
      </Stack>
    </Container>
  );
};

export default React.memo(ViewItemActionBar);
