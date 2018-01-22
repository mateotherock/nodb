import React, {Component} from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

class Recipe extends Component {
    render() {
        return(
            <div className="recipe">
                <header className="recipeHeader">
                    <div className="id">ID : {this.props.id}</div>
                    <button className="delete" 
                    onClick={e => this.props.delete(this.props.id)}
                    >x</button>
                </header>
                <div><img src={this.props.img}></img></div>
                <div className="title">{this.props.title}</div>
                <div className="foodType">* {this.props.foodType} *</div>
                <div>Ingredients: 
                    <ul>
                    {this.props.ingredients.map((value,index,array) => {
                    return <Ingredients name={value.name} quantity={value.quantity}/>
                })}
                    </ul>
                    </div>
                <div>Instructions: 
                    {this.props.instructions.map((value,index,array) => {
                    return <Instructions key={index} index={index+1} step={value}/>
                })}</div>
                <div>Servings = {this.props.servings}</div>
            </div>
        )
    }
}

export default Recipe;