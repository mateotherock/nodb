import React, {Component} from 'react';

const Ingredients = (props) => (
            <div>
                <li>{props.quantity} {props.name}</li>
            </div>
)

export default Ingredients;