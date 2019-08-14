import React, { Component } from 'react';
import './Stats.css';
import StatsItem from './StatsItem'
import { StatsData } from './StatsData'


class Stats extends Component {
    state = {
        data: StatsData
    };
    render() {
        const { data } = this.state;
        return (
            <React.Fragment>
	            <div id="stats">
	            	<div className="container">
	            		<div className="row">
							      {data.map(item => (<StatsItem key={item.id} item={item} />))}
	            		</div>
	            	</div>
	          	</div>
          	</React.Fragment>
        )
    }
}

export default Stats;