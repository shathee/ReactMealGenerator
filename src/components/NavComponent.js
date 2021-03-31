import React from 'react';
import { Link } from "react-router-dom";
import classes from './NavComponent.module.css';



const NavComponent = () => (
    <nav>
            <Link to="/" className={classes.NavMenuBtn}> Home</Link>
            <Link to="/GenerateRandomContainer" className={classes.NavMenuBtn}> Generate Random Meal
            </Link>
            <Link to="/ChooseAvailableContainer" className={classes.NavMenuBtn}> Choose from Availables</Link>
            <Link to="/CustomizationContainer" className={classes.NavMenuBtn}> Customize your meal</Link>
    </nav>
)


export default NavComponent;