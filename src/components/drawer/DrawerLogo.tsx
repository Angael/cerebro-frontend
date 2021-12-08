import React from 'react';
import { Box, Typography } from '@mui/material';
import Icon from '@mdi/react';
import { mdiCloud } from '@mdi/js';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { TRANSITIONS, VARIANTS } from '../../framer/transitions';

const DrawerLogo = () => {
  const theme = useTheme();

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          py: 4,
        }}
      >
        <Icon path={mdiCloud} size={2.5} color={theme.palette.primary.main} />
        <Typography
          variant="h3"
          color="textSecondary"
          component={motion.p}
          initial="collapsed"
          animate="open"
          variants={VARIANTS.drawerHeader}
          transition={TRANSITIONS.drawerHeader}
        >
          Cerebro
        </Typography>
      </Box>
    </div>
  );
};

export default React.memo(DrawerLogo);
