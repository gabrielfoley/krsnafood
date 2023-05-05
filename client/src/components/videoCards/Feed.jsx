import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../../utils/fetchFromApi';
import Videos from './Videos';
import './feed.css';
// import { Videos, Sidebar } from './';

const Feed = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=krsnafood`).then((data) => {
      setVideos(data.items);
      console.log('videos', data.items);
    });
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ overflowY: 'auto', height: '90vh' }}>
        <Typography
          variant='h6'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'black' }}
        ></Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
