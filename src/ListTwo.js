import React, { Component } from 'react'

export default class ListTwo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ (e) => { e.preventDefault(); console.log(this.state) } }>
                    <select onChange={(e) => this.setState({ vehicle: e.target.value })}>
                        <option value="car">Car</option>
                        <option value="truck">Truck</option>
                        <option value="skateboard">Skateboard</option>
                    </select>
                    <select onChange={(e) => this.setState({ color: e.target.value })}>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                    </select>
                    <select onChange={(e) => this.setState({ animal: e.target.value })}>
                        <option value="fish">Fish</option>
                        <option value="dog">Dog</option>
                        <option value="bird">Bird</option>
                        <option value="cat">Cat</option>
                    </select>
                    <select onChange={(e) => this.setState({ sense: e.target.value })}>
                        <option value="sight">Sight</option>
                        <option value="hearing">Hearing</option>
                        <option value="smell">Smell</option>
                        <option value="touch">Touch</option>
                        <option value="taste">Taste</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div> 
        )
    }
}
