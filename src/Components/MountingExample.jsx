import React, { Component } from 'react'

export class MountingExample extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Counter Started")

        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }

    resetCounter = () => {
        this.setState({ count: 0 })
    }


    render() {
        return (
            <div>
                <h2>Counter : {this.state.count}</h2>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
}

export default MountingExample
