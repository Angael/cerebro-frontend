import React, { FunctionComponent } from 'react';
import { Box, IconButton, Stack, styled, Typography } from '@mui/material';
import palette from '../../../theme/palette';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiDelete, mdiFullscreen, mdiStar } from '@mdi/js';
import { useNavigate } from 'react-router';
import { IFrontItem } from '../../../model/IFrontItem';
import { NAV_HEIGHT } from '../../../utils/consts';
import { deleteItemReq } from '../../../network/deleteItemReq';

type Props = {
  item?: IFrontItem;
};

const Container = styled('div')({
  borderBottom: `solid 1px ${palette.grey['50024']}`,
  padding: 8,
  height: NAV_HEIGHT,
});

const OverflowTypography = styled(Typography)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

const StackWithOverflowText = styled(Stack)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  flex: 1,
});

const ViewItemActionBar: FunctionComponent<Props> = ({ item }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (item) {
      deleteItemReq(item.id);
    }
  };

  return (
    <Container>
      <Stack direction='row' alignItems='center' gap={1}>
        <StackWithOverflowText
          direction='row'
          alignItems='center'
          sx={{ flex: 1 }}
        >
          <IconButton onClick={() => navigate(-1)}>
            <Icon path={mdiArrowLeft} size={1} />
          </IconButton>
          <OverflowTypography>{item?.fileData?.filename}</OverflowTypography>
        </StackWithOverflowText>
        <IconButton>
          <Icon path={mdiFullscreen} size={1} />
        </IconButton>
        <IconButton color={'warning'}>
          <Icon path={mdiStar} size={1} />
        </IconButton>
        <IconButton color={'error'} onClick={handleDelete}>
          <Icon path={mdiDelete} size={1} />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default React.memo(ViewItemActionBar);
