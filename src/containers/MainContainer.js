import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AvailableContainer from './SubContainers/AvailableContainer';
import classes from './MainContainer.module.css';

class MainContainer extends Component  {
    render() {
      return (
        <div className={classes.MainContainer}>
          <Router>
          <h3>Meal Generator</h3>
          <nav>
            <button className={classes.NavMenuBtn} >
                <Link to="/GenerateRandomContainer"> Generate Random Meal</Link>
            </button>
            <button className={classes.NavMenuBtn}>
            <Link to="/ChooseAvailableContainer"> Choose from Availables</Link>
            </button>
            <button className={classes.NavMenuBtn} >
            <Link to="/CustomizationContainer"> Customize your meal</Link>
            </button>
          </nav>
          <div className={classes.Content}>
            <Switch>
            <Route path="/ChooseAvailableContainer">
                <AvailableContainer />
            </Route>
            
            </Switch>
          </div>
          </Router>
        </div>
      );
    }
    
  }
  
  export default MainContainer;