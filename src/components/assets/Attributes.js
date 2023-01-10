import React from 'react'
import { Grid, Box, Button } from '@mui/material';

const s = {
}

export default function Attributes() {

  const insertAttr = (placeholder) => {
    const canvas = document.getElementById("canvas");

    const attr = document.createElement("div");
    attr.innerText = placeholder;
    attr.style.position = "absolute";
    attr.className = "selectable";

    canvas.appendChild(attr);
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ width: '100%' }} onClick={() => insertAttr("{}")}>New attributes</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ width: '100%' }} onClick={() => insertAttr("{Name}")}>{"{Name}"}</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
