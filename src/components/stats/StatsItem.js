import React, { Component } from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

class StatsItem extends Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }
    render() {
        const { icon, label, number } = this.props.item;
        return (
            <div className="col-2 p-0 mx-auto stats-item wow fadeIn" >
                <span><img src={icon} alt="stats-icon"/></span>
                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                    <h3><CountUp start={0} end={this.state.didViewCountUp ? number : 0} duration={3} /></h3>
                </VisibilitySensor>
                <h4>{label}</h4>
                <span className="stick"></span>
            </div>
        )
    }
}

export default StatsItem