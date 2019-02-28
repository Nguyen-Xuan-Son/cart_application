import React, { Component } from 'react';

class Message extends Component {

    render() {
    	const {message} = this.props;

        return (
            <div>
            	<h3>
                    <span className="badge amber darken-2">{message}</span>
                </h3>
            </div>
        );
    }
}

export default Message;
