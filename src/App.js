import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ScrollTop from './components/ScrollTop';
import MainDiv from './components/MainDiv';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Paper>
      <NavBar darkMode/>
        <MainDiv/>
      <ScrollTop/>
    </Paper>
  );
}

export default App;
