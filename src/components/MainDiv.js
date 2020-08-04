import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme=>({
    root:{
        //background : "linear-gradient(45deg, #757575 10%, #ffffff 99%)",
        height: '100vh',
    },

}))


export default function MainDiv(children){
    const classes = useStyles();
    return(
        <Paper variant='outlined' className={classes.root}>
                    <p><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/>
                    </p>
        </Paper>
    )
}