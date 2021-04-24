import { Component } from 'react';

import Meals from '../../components/Meals';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
      }
    
    handleSearchMeal = (event) => {
        event.preventDefault();
        const text = event.target.elements.searchText.value
          ;
        if(text.trim().length !== 0){
            fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`, 
            )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState(data);
            });
        }
       
    }

    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearchMeal}>
                    <input name="searchText" placeholder="Search for Meal name" />
                    <button type="submit">Search</button>
                </form>
                
                <Meals data={this.state} />
            </div>
            
        );
    }
}

export default HomeContainer;