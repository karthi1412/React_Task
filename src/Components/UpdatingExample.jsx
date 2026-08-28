import React, { Component } from 'react'

export class UpdatingExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log('componentDidUpdate');
        if (prevState.count !== this.state.count) {
            console.log("Count changed to : ", this.state.count)
        }
    }

    changename = () => {
        this.setState({
            name: this.state.name = "Dravid"
        })
    }

    render() {
        return (
            <div>
                <h3>Display Name : {this.state.name}</h3>
                <button onClick={this.changename}>Change Name</button>
            </div>
        )
    }
}

export default UpdatingExample