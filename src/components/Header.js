import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <h1 className="logo">Matt's Kitchen</h1>
                <button className= "header-button">Filter Recipes</button>
                <button className= "header-button">Add Recipe</button>
            </header>
        )
    }
}

export default Header;