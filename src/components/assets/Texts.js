import React from 'react'
import { Grid, Box, Button } from '@mui/material';

const s = {
}

export default function Placeholders() {

  const insertText = (placeholder) => {
    const canvas = document.getElementById("canvas");

    const text = document.createElement("div");
    text.innerText = placeholder;
    text.style.position = "absolute";
    text.className = "selectable";

    canvas.appendChild(text);
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ width: '100%' }} onClick={() => insertText("Your paragraph text")}>Add a text box</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ width: '100%' }} onClick={() => insertText("Add a heading")}>Add a heading</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ width: '100%' }} onClick={() => insertText("Add a subheading")}>Add a subheading</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
