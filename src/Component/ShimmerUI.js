import React from 'react';
import { Box, Paper, Typography, Skeleton } from '@mui/material';

const ShimmerSchemeBox = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Paper elevation={3} style={{ padding: 16, marginBottom: 16,width: '50%',height:"300px"  }}>
    <Skeleton variant="text" width="70%" height={24} />
      <Skeleton variant="text" width="50%" height={20} />
      <Skeleton variant="text" width="90%" height={16} />
      <Skeleton variant="text" width="80%" height={16} />
      <Skeleton variant="text" width="60%" height={16} />
    </Paper>
    </Box>
  );
};

export default ShimmerSchemeBox;
