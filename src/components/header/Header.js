import React, { Component } from 'react';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
    render() {
        return (
            <div id="header" className="container">
	            <nav className="navbar navbar-expand-lg">
							  <a className="navbar-brand" href="#header">
									<img src={require("../../img/logo.png")} alt="waxom-logo"/>
							  </a>
							  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nsc" aria-controls="nsc" aria-expanded="false" aria-label="Toggle navigation">
							    <span className="navbar-toggler-icon"></span>
							  </button>

							  <div className="collapse navbar-collapse" id="nsc">
							    <ul className="navbar-nav mx-auto">
							      <li className="nav-item active">
							        <AnchorLink className="nav-link" href="#header">Home <span className="sr-only">(current)</span></AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#about">About Us</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#projects">Portfolio</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#services">Features</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#posts">Blog</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#pricing">Pricing</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#smartcodes">Smartcodes</AnchorLink>
							      </li>
							      <li className="nav-item">
							        <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
							      </li>
							    </ul>
							    <form className="form-inline my-2 my-lg-0">
							      <button className="btn">
							      	<span className="header-icon-cart"></span>
							      </button>
							      <button className="btn">
							      	<span className="header-icon-search"></span>
							      </button>
    							</form>
							  </div>
							</nav>
						</div>
        )
    }
}

export default Header;