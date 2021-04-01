
import Meal from './Meal';
import classes from './Meals.module.css';


const Meals = (props) => (
    <div className={classes.mealsDiv}>
        <Meal {...props} />
    </div>
)

export default Meals;