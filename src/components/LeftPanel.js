import React from 'react'
import { Box, Typography } from '@mui/material';
import config from '../config';

const s = {
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    backgroundColor: '#111',
    color: '#aaa'
  },
  primaryPanel: {
    width: 72,
  },
  secondaryPanel: {
    width: 300,
    backgroundColor: '#222',
    position: 'relative'
  },
  btn: {
    height: 72,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
      color: '#fff'
    },
    '&.active': {
      color: '#fff',
      backgroundColor: '#222',
    }
  },
  hideBtn: {
    position: 'absolute',
    left: '100%',
    top: '50%',
    background: '#222',
    padding: '8px',
    cursor: 'pointer'
  }
}

export default function LeftPanel() {
  const [SecondaryPanel, setSecondaryPanel] = React.useState();
  
  const removeActiveStateFromAllBtns = () => {
    Array.from(document.getElementsByClassName('active')).forEach(el => el.classList.remove('active'));
  }

  const handleBtnActiveState = (e) => {
    removeActiveStateFromAllBtns();
    e.currentTarget.classList.add('active');
  }

  const onBtnClick = (e, Assets) => {
    handleBtnActiveState(e);
    setSecondaryPanel(<Assets />);
  }

  const onHideBtnClick = () => {
    setSecondaryPanel();
    removeActiveStateFromAllBtns();
  }

  return (
    <Box sx={s.root}>
      <Box sx={s.primaryPanel}>
        {config.tools.map(tool => (
          <Box key={tool.label} sx={s.btn} onClick={(e) => onBtnClick(e, tool.assets)}>
            <Typography variant="h6" component="div" align="center">
              {tool.icon}
            </Typography>
            <Typography variant="caption" component="div" align="center">
              {tool.label}
            </Typography>
          </Box>
        ))}
      </Box>
      {SecondaryPanel && <Box sx={s.secondaryPanel}>
          <Box sx={s.hideBtn} onClick={onHideBtnClick}>〈</Box>
          {SecondaryPanel}
      </Box>}
    </Box>
  )
}
