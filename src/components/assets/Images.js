import React from 'react'
import { Grid, Box } from '@mui/material';

const s = {
  box: {
    paddingTop: '100%',
    border: '1px solid #444',
    position: 'relative',
    cursor: 'pointer'
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // objectFit: 'cover',
    padding: '16px'
  }
}

const images = [
  '/assets/e2.png',
  '/assets/e3.png',
  '/assets/e1.png',
  '/assets/e4.png',
  '/assets/e5.png'
]

export default function Images() {

  const insertImage = (src) => {
    const canvas = document.getElementById("canvas");

    const img = document.createElement("img");
    img.src = src;
    img.style.position = "absolute";
    img.style.height = "80px";
    img.style.transform = "translate3d(0,0,0)";
    img.className = "selectable";

    canvas.appendChild(img);
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container item spacing={2}>
        {images.map((g, i) => (
          <Grid key={i} item xs={6}>
            <Box sx={s.box} onClick={() => insertImage(g)}>
              <img style={s.img} src={g} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
