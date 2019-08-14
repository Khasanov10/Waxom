import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <React.Fragment>
	            <div id="about">
	            	<div className="row center">
									<div className="col-xl-8 col-lg-8 col-md-8 about-item">
										<h2>Waxom is Realization of your Ideas.</h2>
										<p className="mb-5">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
									</div>
	            	</div>
	            	<div className="container">
		            	<div className="about-item center">
		            		<img src={require('../../img/waxom_realization.png')} alt="waxom"/>	
		            	</div>
	            	</div>
	            	<div className="wordpress">
									<div className="container">
										<div className="row center">
											<div className="wordpress-text col-lg-8 col-md-12 col-sm-12">
												<h2>waxom multipurpose wordPress theme</h2>
												<p>Don't Forget to Rate the Template Thanks so much!</p>
											</div>
											<div className="wordpress-link col-lg-4 col-md-12 col-sm-12">
												<a href="https://google.com" className="btn">purchase now</a>
											</div>
										</div>
									</div>
	            	</div>
	          	</div>
          	</React.Fragment>
        )
    }
}

export default About;