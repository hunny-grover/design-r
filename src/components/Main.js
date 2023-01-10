import React from 'react'
import { Grid } from '@mui/material';
import LeftPanel from './LeftPanel';
import TopPanel from './TopPanel';
import Canvas from './Canvas';
import Moveable from "react-moveable";

const s = {
    root: {
    }
}

export default function Main() {
    const [selectedElement, setSelectedElement] = React.useState();

    const bindSelectableElement = () => {
        document.addEventListener("click", function (e) {
            const targetEl = e.target.closest(".selectable");
            const canvasWrapper = e.target.closest("#canvasWrapper");
            if (targetEl) {
                setSelectedElement(e.target);
            } else if (canvasWrapper) {
                setSelectedElement();
            }
        });
    }

    React.useEffect(() => {
        bindSelectableElement();
    },[])

    return (
        <>
            <Grid container sx={s.root}>
                <Grid item xs="auto">
                    <LeftPanel />
                </Grid>
                <Grid item container xs direction="column">
                    <Grid item xs="auto">
                        <TopPanel />
                    </Grid>
                    <Grid item container xs>
                        <Canvas />
                    </Grid>
                </Grid>
            </Grid>
            
            <Moveable
                target={selectedElement}
                draggable={true}
                origin={false}
                zoom={2}
                padding={{"left":3,"top":3,"right":3,"bottom":3}}
                onDrag={({ target, beforeTranslate }) => {
                    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
                }}
            />
        </>
    )
}
