import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },

}));


export default function NavBar(props){
  
  const classes = useStyles();
  
  return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar id="back-to-top-anchor">
              <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon /> 
              </IconButton>
              <Typography variant="h3" align="center" className={classes.title}>
                Welcome! {/* here should be name of the page! or smtng*/}
              </Typography>
              <ButtonGroup outlined>
                <IconButton onClick={()=>props.setDarkMode(!props.darkMode)}color="inherit" align="right" size="small" className={classes.menuButton}> 
                  <Brightness5Icon /> 
                </IconButton>
                <IconButton color="inherit" align="right" size="small" className={classes.menuButton}> <Brightness3Icon/> </IconButton>
                <IconButton color="inherit" align="right" size="small" className={classes.menuButton}> <BlurOnRoundedIcon/> </IconButton> 
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </div>
    );
}