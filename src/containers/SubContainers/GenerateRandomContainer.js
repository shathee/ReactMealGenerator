import { Component } from 'react';

import Meals from '../../components/Meals';

class GenerateRandomContainer extends Component {

    state = {
        // mealId: null,
        // mealName: null,
        // mealArea: null,
        // mealCategory: null,
    }

    componentDidMount (){
        console.log('mounted');
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState(data['meals'][0]
                // mealId: data['meals'][0].idMeal,
                // mealName: data['meals'][0].strMeal,
                // mealArea: data['meals'][0].strArea,
                // mealCategory: data['meals'][0].strCategory
              );
            console.log(this.state);
            } 
        );
         
    }
    
    render() {
        return (
            <Meals data={this.state} />
        );
    }
}

export default GenerateRandomContainer;