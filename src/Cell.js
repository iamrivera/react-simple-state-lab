import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) { //props that the component gets from its parent
        super();
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
        color: props.value
        };
    }

    changeColor = () => { 
        const newColor = '#333'
        this.setState({
            color: newColor,
        });
    };

    render() {
        return(<div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>)
    }
}

