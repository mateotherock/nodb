import React, {Component} from 'react';
import Recipe from './Recipe';
import RefsForm from './RefsForm';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import axios from 'axios';

class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipesToDisplay: [],
            selectedOption: 'Appetizer'
        }
        this.filter = this.filter.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
    }
    componentWillMount() {
        axios.get('http://localhost:3001/api/recipes')
        .then(resp => {
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    filter(value) {
        let filterVal = value;
        axios.get(`http://localhost:3001/api/recipes/${filterVal}`)
        .then(resp => {
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    deleteRecipe(id) {
        console.log('trying to delete')
        axios.delete(`http://localhost:3001/api/recipes/${id}`)
        .then(resp => {
            console.log(resp.data);
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    addRecipe(obj){
        axios.post(`http://localhost:3001/api/recipes`, obj)
        .then(resp => {
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    editRecipe(obj, id){
        console.log(obj)
        console.log(id)
        axios.put(`http://localhost:3001/api/recipes/${id}`, obj)
        .then(resp => {
            console.log(resp.data)
            this.setState({
                recipesToDisplay:resp.data
            })
        })
    }
    render() {
        return(
            <div>
                <div className="top">
                    <RefsForm filter={this.filter}/>
                    <AddRecipe addRecipe={this.addRecipe}/>
                    <EditRecipe editRecipe={this.editRecipe}/>
                </div>
                <div className="grid">
                    {this.state.recipesToDisplay.map((value,index,array) => {
                        return <Recipe id={value.id} 
                        delete={this.deleteRecipe} 
                        img={value.image} 
                        title={value.title} 
                        foodType = {value.foodType} 
                        ingredients={value.ingredients} 
                        instructions={value.instructions} 
                        servings={value.servings}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Grid;