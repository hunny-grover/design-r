import React from 'react'
import { Grid, Box } from '@mui/material';

const s = {
  box: {
    paddingTop: '100%',
    border: '1px solid #444',
    backgroundSize: 'cover',
  }
}

const templateHtmls = [
  '<div id="canvas" style="width: 400px; height: 300px; position: relative; background: url(&quot;/assets/bg1.jpg&quot;) center center / cover no-repeat;"><img src="/assets/e1.png" class="selectable" style="position: absolute; height: 80px; transform: translate(165px, 211px);"><div class="selectable" style="position: absolute; transform: translate(172px, 174px);">{Name}</div><div class="selectable" style="position: absolute; transform: translate(128px, 134px);">Your paragraph text</div></div>',
  '<div id="canvas" style="width: 400px; height: 300px; position: relative; background: url(&quot;/assets/bg2.jpg&quot;) center center / cover no-repeat;"><div class="selectable" style="position: absolute; transform: translate(172px, 194px);">{Name}</div><div class="selectable" style="position: absolute; transform: translate(128px, 114px);">Your paragraph text</div></div>'
]

export default function Templates() {

  const setTemplate = (html) => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    canvasWrapper.innerHTML = html;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container item spacing={2}>
        {templateHtmls.map((g, i) => (
          <Grid key={i} item xs={6}>
            <Box sx={{...(s.box), backgroundImage: 'url(https://picsum.photos/200)' }} onClick={() => setTemplate(g)}></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
