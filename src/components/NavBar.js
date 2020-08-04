import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness3Icon from '@material-ui/icons/Brightness3';
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


export default function NavBar(){
  
  const classes = useStyles();
  
  return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar id="back-to-top-anchor">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon /> 
              </IconButton>
              <Typography variant="h3" align="center" className={classes.title}>
                Welcome! {/* here should be name of the page! or smtng*/}
              </Typography>
              <Button color="inherit" align="right" size="small" startIcon={<Brightness3Icon/>}  className={classes.menuButton}/>
              <Button color="inherit" align="right" size="small" startIcon={<BlurOnRoundedIcon/>}  className={classes.menuButton}/>

            </Toolbar>
          </AppBar>
        </div>
    );
}