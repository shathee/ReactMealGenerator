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
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            this.setState(data['meals'][0]
              );
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