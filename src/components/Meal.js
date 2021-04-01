
import classes from './Meal.module.css';


const Meal = (props) => {
    let ingObj = {};
    for (let [key, value] of Object.entries(props.data)) {
        if(key.search('strIngredient') !== -1 && value !== '') {
                console.log('strMeasure' + key.replace('strIngredient',''))
                ingObj[value] = props.data['strMeasure' + key.replace('strIngredient','')];  
            }
    }
    let ings = Object.keys(ingObj).map(function(key) {
        return <option value={key}>{key} : {ingObj[key]}</option>
    });
    
    return (
    <div className={classes.mealDiv}>
        <div className={classes.left}>
            <h3 className={classes.mealTitle}>{props.data.strMeal}</h3>
            <div className={classes.row}>
                <img src= {props.data.strMealThumb} alt={props.data.strMealThumb} />
                <p>
                    {ings}
                </p>
            </div>
        </div>
        <div className={classes.right}>
            <p>{props.data.idMeal}</p>
            <p>{props.data.strArea}</p>
            <p>{props.data.strCategory}</p>
        </div>
    </div>
    )
}

export default Meal;