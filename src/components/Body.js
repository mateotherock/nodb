import React, {Component} from 'react';
import Grid from './Grid'

class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="App-body">
                <Grid/>
            </div>
        )
    }
}

export default Body;