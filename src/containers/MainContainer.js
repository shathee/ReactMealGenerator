import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ChooseAvailableContainer from './SubContainers/AvailableContainer';
import CustomizationContainer from './SubContainers/CustomizationContainer';
import GenerateRandomContainer from './SubContainers/GenerateRandomContainer';
import HomeContainer from './SubContainers/HomeContainer';
import NavComponent from '../components/NavComponent.js';

import classes from './MainContainer.module.css';

class MainContainer extends Component  {
    render() {
      return (
        <div className={classes.MainContainer}>
          <Router>
          <h3>Meal Generator</h3>
          <NavComponent />
          <div className={classes.Content}>
            <Switch>
                <Route path="/ChooseAvailableContainer" component={ChooseAvailableContainer} />
                <Route path="/GenerateRandomContainer" component={GenerateRandomContainer} />
                <Route path="/CustomizationContainer" component={CustomizationContainer} />
                <Route path="/" component={HomeContainer} />
            </Switch>
          </div>
          </Router>
        </div>
      );
    }
    
  }
  
  export default MainContainer;