import React, { Component } from 'react';
import './Mobile.css';

class Mobile extends Component {
    render() {
        return (
            <React.Fragment>
	            <div id="mobile">
								<div className="container">
									<div className="row">
										<div className="col-4 mobile-img">
											<img src={require("../../img/mobile.png" )} alt="mobile" className="w-100" />
										</div>
										<div className="col-8 mobile-text">
											<h3>Excellent for Mobile Devices.</h3>
											<p>Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
											<ul>
												<li><span><img src={require("../../img/icons/arrow-mobile.png")} alt="mobile arrow" /></span>Nam liber tempor cum soluta nobis eleifend option;</li>
												<li><span><img src={require("../../img/icons/arrow-mobile.png")} alt="mobile arrow" /></span>Option congue nihil imperdiet doming id quod mazim placerat facer;</li>
												<li><span><img src={require("../../img/icons/arrow-mobile.png")} alt="mobile arrow" /></span>Eodem modo typi, qui nunc nobis videntur parum futurum;</li>
												<li><span><img src={require("../../img/icons/arrow-mobile.png")} alt="mobile arrow" /></span>Investigationes demonstraverunt lectores</li>
											</ul>
										</div>
									</div>
								</div>
	            </div>
          	</React.Fragment>
        )
    }
}

export default Mobile;