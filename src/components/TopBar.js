import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function TopBar() {
  const downloadHandler = () => {
    let templateSourceCode = document.getElementById('canvasWrapper').innerHTML;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(templateSourceCode));
    element.setAttribute('download', 'template.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Design'R
        </Typography>
        <Box sx={{ cursor: 'pointer' }} onClick={downloadHandler}>Download</Box>
      </Toolbar>
    </AppBar>
  )
}
