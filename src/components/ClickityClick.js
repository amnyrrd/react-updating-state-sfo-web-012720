import React, { Component } from 'react';

export default class ClickityClick extends Component {
    state = {hasBeenClicked: false,
        count: 0
    }
    
    handleClick = () => {
        // let newCount = this.state.count + 1;
        // this.setState({
        //     hasBeenClicked: true,
        //     count: newCount
        // })
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click meee!</button>
            </div>
        )
    }
}
