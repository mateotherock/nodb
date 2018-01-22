import React, {Component} from 'react';

class AddRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: '',
            title: '',
            foodType: '',
            ingredients: [],
            instructions: [],
            servings: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const {addRecipe} =  this.form;

        this.props.addRecipe(this.state)
        this.setState({
            image: '',
            title: '',
            foodType: '',
            ingredients: [],
            instructions: [],
            servings: ''
        })
    }
    render(){
        return(
            <div>
                <form
                    className="addRecipe"
                    onSubmit={this.handleSubmit}
                    ref={form => this.form = form}>
                    <p>Add Recipe</p>
                    <label>
                        Image Link: 
                        <input type="text" 
                               name="image"
                               value={this.state.image}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Title: 
                        <input type="text" 
                               name="title"
                               value={this.state.title}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Food Type:
                        <input type="text" 
                               name="foodType"
                               value={this.state.foodType}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Ingredients:
                        <input type="text" 
                               name="ingredients"
                               value={this.state.ingredients}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Instructions:
                        <input type="text" 
                               name="instructions"
                               value={this.state.instructions}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Servings:
                        <input type="text" 
                               name="servings"
                               value={this.state.servings}
                               onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default AddRecipe;