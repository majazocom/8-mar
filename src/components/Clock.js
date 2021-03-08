import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date()
         }
    }

    componentDidMount() {
        //här ska vår setInterval börja AKA klockan starta
        this.clock = setInterval(() => this.newTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clock);
    }

    newTime() {
        this.setState({
            date: new Date()
        })
    }

    render() { 
        return ( 
            <article>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </article>
         );
    }
}
 
export default Clock;