import React, {Component} from 'react';

class RefsForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {myFilter} =  this.form;

        console.log(myFilter, myFilter.value);
        this.props.filter(myFilter.value);

    }
    render(){
        return(
            <div>
                <form
                    className="filter"
                    onSubmit={this.handleSubmit}
                    ref={form => this.form = form}>
                    <p>Filter</p>
                    <RadioSet
                        setName={'myFilter'}
                        setOptions={['Appetizer', 'Chicken', 'Beef', 'Soup', 'Side Dish', 'Dessert']}/>
                        <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
function RadioSet(props){
    return(
        <div>
            {props.setOptions.map(option => {
                return (
                <label
                    key={option}
                    style={{textTransform: 'capitalize'}}>
                    {option}
                    <input
                    type="radio"
                    value={option}
                    name={props.setName} />
                </label>
                )
            })}
        </div>
    )           
}


export default RefsForm