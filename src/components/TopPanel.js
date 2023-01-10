import React from 'react'
import { Box } from '@mui/material';

const s = {
    root: {
        height: 48,
        backgroundColor: '#fff',
        color: '#111',
        borderBottom: '1px solid #eee',
    }
}

export default function TopPanel() {
  return (
    <Box sx={s.root}>
        Test
    </Box>
  )
}
