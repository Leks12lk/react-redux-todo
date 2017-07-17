import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Home;