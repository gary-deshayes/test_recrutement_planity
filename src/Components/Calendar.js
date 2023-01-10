import React from 'react'
import Event from './Event';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const calendarStyle = {
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column'
        }
        return (
            <div style={calendarStyle}>
                <p>09:00 am</p>
                {this.props.events.map((object) => <Event event={object} />)}
                <p>09:00 pm</p>
            </div>
        );
    }
}

export default Calendar