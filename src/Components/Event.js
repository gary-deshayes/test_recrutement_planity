import React from 'react'

class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const eventStyle = {
            border: 'solid black 1px',
            backgroundColor: 'lightgrey',
            width: this.props.event.width,
            height: this.props.event.height,
            paddingTop: '10px',
            margin: '5px 10px',
            display: 'inline'
        }
        return (
            <div style={eventStyle}>
                {this.props.event.id}
            </div>
        );
    }
}

export default Event