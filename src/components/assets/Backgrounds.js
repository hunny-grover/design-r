import React from 'react'
import { CirclePicker } from 'react-color';
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
    objectFit: 'contain',
    padding: '16px'
  }
}

const bgs = [
  '/assets/bg1.jpg',
  '/assets/bg2.jpg'
]

const colors = [
  '#FDEEDC', 
  '#F0ECCF', 
  '#FFFBC1',
  '#EDDBC0',
  '#FFF5E4',
  '#EEF2E6',
  '#FFFFFF',
  '#FCFFE7',
  '#F5EEDC'
]

export default function Backgrounds() {
  
  const setBackground = (props) => {
    const canvas = document.getElementById("canvas");
    if (props?.hex) {
      canvas.style.background = props.hex;
    } else {
      canvas.style.background = `url(${props}) center center / cover no-repeat`;
    }
  }
  
  return (
    <Box sx={{ p: 4 }}>
      <CirclePicker colors={colors} onChangeComplete={setBackground} />
      <Grid sx={{mt: 4}} container item spacing={2}>
        {bgs.map((g, i) => (
          <Grid key={i} item xs={6}>
            <Box sx={s.box} onClick={() => setBackground(g)}>
              <img style={s.img} src={g} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
