import React, {Component} from 'react';
import Recipe from './Recipe';
import axios from 'axios';

class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipesToDisplay: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3001/api/recipes')
        .then(resp => {
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    // deleteRecipe(id) {
    //     console.log('trying to delete')
    //     axios.delete(`http://localhost:3001/api/recipes/${id}`)
    //     .then(resp => {
    //         console.log(resp.data);
    //         this.setState({
    //             recipesToDisplay:resp.data
    //         })
    //     })
    // }
    render() {
        return(
            <div className="grid">
                {this.state.recipesToDisplay.map((value,index,array) => {
                    return <Recipe id={value.id} 
                    // delete={this.deleteRecipe()} 
                    img={value.image} 
                    title={value.title} 
                    foodType = {value.foodType} 
                    ingredients={value.ingredients} 
                    instructions={value.instructions} 
                    servings={value.servings}/>
                })}
            </div>
        )
    }
}

export default Grid;