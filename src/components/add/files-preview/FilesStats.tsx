import React from 'react';
import numeral from 'numeral';
import { ExtendedFile } from '../../../model/extendedFile';
import { Box, Typography } from '@mui/material';

interface IProps {
  files: ExtendedFile[];
}

const FilesStats = ({ files }: IProps) => {
  let summedSize, avgSize, minSize, maxSize, types;
  if (!files || !files.length) {
    summedSize = 0;
    avgSize = 0;
    minSize = 0;
    maxSize = 0;
    types = [];
  } else {
    types = [
      ...new Set(files.map((file) => file.file.type.replace('image/', ''))),
    ];
    const sizes = files.map((file) => file.file.size);
    summedSize = sizes.reduce((a, b) => a + b, 0);

    avgSize = summedSize / sizes.length;
    minSize = Math.min(...sizes);
    maxSize = Math.max(...sizes);
  }

  if (files.length < 2) {
    return null;
  }

  return (
    <Box
      my={4}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>Sum size: {numeral(summedSize).format('0.00b')}</Typography>
      <Typography>Average: {numeral(avgSize).format('0.00b')}</Typography>
      <Typography>Biggest: {numeral(maxSize).format('0.00b')}</Typography>
      <Typography>Smallest: {numeral(minSize).format('0.00b')}</Typography>
    </Box>
  );
};

export default FilesStats;
