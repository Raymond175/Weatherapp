import React, {component} from 'react'
import {connect} from 'react-redux'
import {Component} from "react/cjs/react.production.min";


class Newcomp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Subscribe to Raymond",
        };
    }
    styles = {
        fontstyle: "italic",
        color: "purple",
    };
    ButtonChange = () => {
        this.setState({
            message: 'Thank you for subscribing',
            color: 'yellow'
        });
    };
    render() {
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>Subscribe</button>
            </div>
        );
    }
}

export default Newcomp;


