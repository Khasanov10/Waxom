import React, { Component } from 'react';

class ServicesItem extends Component {
    render() {
        const { icon, h3, p } = this.props.item;
        return (
            <div className="col-xl-3 col-lg-6 col-sm-6 services-item">
                <span className={icon}></span>
                <h3>{h3}</h3>
                <p>{p}</p>
                <span className="stick"></span>
            </div>
        )
    }
}

export default ServicesItem