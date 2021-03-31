
import classes from './Meals.modules.css';


const Meals = (props) => (
    <div className={classes.mealsDiv}>
        <h2>{props.data.mealName}</h2>
    </div>
)

export default Meals;