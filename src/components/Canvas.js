import React from 'react'
import { Box, Paper } from '@mui/material';

const s = {
  root: {
    backgroundColor: '#eee',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    overflow: 'hidden',
  }
}

export default function Canvas() {
  return (
    <Box sx={s.root} id="canvasWrapper">
      <Paper elevation={3} sx={s.paper}>
        <div id="canvas" style={{ width: 400, height: 300, position: 'relative' }}>
        </div>
      </Paper>
    </Box>
  )
}
