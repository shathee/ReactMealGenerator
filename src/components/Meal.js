
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
        return <li key={key}> <strong>{key}</strong> : {ingObj[key]}</li>
    });
    
    return (
    <div className={classes.mealDiv}>
        <div className={classes.left}>
            
            <div className={classes.row}>
                <img src= {props.data.strMealThumb} alt={props.data.strMealThumb} />
                <div className={classes.ingredients}>
                <h3 className={classes.mealTitle}>{props.data.strMeal}</h3>
                    {ings}
                </div>
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