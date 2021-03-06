import React from 'react';
import Details from "./components/Details/Details";
import {Grid} from "@material-ui/core";
import './App.css';
import useStyles from "./styles";
import Main from "./components/Main/Main.jsx";


function App() {
  const classes = useStyles();
  return (
    <div className="app">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
        <Grid item xs={12} sm={4} >  
            <Details title="Income"></Details>
        </Grid>
        <Grid item xs={12} sm={3} >  
          <Main></Main>
        </Grid>
        <Grid item xs={12} sm={4} >  
            <Details title="Expense"></Details>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
