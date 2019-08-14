import React, { Component } from 'react';
import './Partners.css';

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
	            <div id="partners">
	            	<div className="container">
	            		<div className="row">
                    <div className="col-3 partners-item">
                      <img src={require("../../img/partner-1.png")} alt="partners"/>
                    </div>
                    <div className="col-3 partners-item">
                      <img src={require("../../img/partner-2.png")} alt="partners"/>
                    </div>
                    <div className="col-3 partners-item">
                      <img src={require("../../img/partner-3.png")} alt="partners"/>
                    </div>
                    <div className="col-3 partners-item">
                      <img src={require("../../img/partner-4.png")} alt="partners"/>
                    </div>
                  </div>
	            	</div>
	          	</div>
          	</React.Fragment>
        )
    }
}

export default Partners;