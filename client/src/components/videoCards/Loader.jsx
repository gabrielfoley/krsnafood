import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
const Loader = () => (
  <Box minHeight='40vh'>
    <Stack
      direction='column'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='40vh'
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
