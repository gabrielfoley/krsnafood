import React, { useEffect, useState } from 'react';

import { Typography, Card, CardContent } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (window.screen >= 1500) {
      setScreenSize('600px');
    } else if (window.screen <= 1500 && window.screen > 1100) {
      setScreenSize('450px');
    } else if (window.screen <= 1000 && window.screen > 600) {
      setScreenSize('400px');
    } else if (window.screen <= 800 && window.screen > 500) {
      setScreenSize('500px');
    }
  }, [screenSize]);

  return (
    <Card
      sx={{
        width: {
          xs: '380px',
          sm: '300px',
          md: '450px',
          xl: '600px',
        },
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        className='react-player'
        controls
        width={screenSize}
      />
      <CardContent sx={{ backgroundColor: '#65000b', height: '70px' }}>
        <Typography
          // variant='subtitle1'
          fontSize='14px'
          fontWeight='300px'
          color='#FFF'
        >
          {snippet?.title.slice(0, 60) || 'krsnafood'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
