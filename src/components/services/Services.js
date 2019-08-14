import React, { Component } from 'react';
import './Services.css';
import ServicesItem from './ServicesItem'
import { ServicesData } from './ServicesData'

class Services extends Component {
    state = {
        data: ServicesData
    };

    render() {
        const { data } = this.state;
        return (
            <div id="services">
	            <div className="container">
      					<div className="row">
      						{data.map(item => (<ServicesItem key={item.id} item={item} />))}
      					</div>
	            </div>
          	</div>
        )
    }
}


export default Services;