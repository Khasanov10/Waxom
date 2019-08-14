import React, { Component } from "react";
import "./Slider.css";
import Header from "../header/Header";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Slider extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<AwesomeSlider>
					<div>
						<img
							src={require("../../img/slide.png")}
							className='slider-img d-block w-100'
							alt='...'
						/>
						<div className='carousel-caption d-none d-md-block'>
							<h3>Unique and Modern Design</h3>
							<h1>Portfolio PSD Template</h1>
							<p>
								Nam liber tempor cum soluta nobis eleifend option congue nihil
								imper <br /> diet doming id quod mazim placerat facer possim
								assum.
							</p>
							<AnchorLink href='#services' className='btn'>
								Get Started
							</AnchorLink>
						</div>
					</div>
					<div>
						<img
							src={require("../../img/slide.png")}
							className='slider-img d-block w-100'
							alt='...'
						/>
						<div className='carousel-caption d-none d-md-block'>
							<h3>Unique and Modern Design</h3>
							<h1>Portfolio PSD Template</h1>
							<p>
								Nam liber tempor cum soluta nobis eleifend option congue nihil
								imper <br /> diet doming id quod mazim placerat facer possim
								assum.
							</p>
							<AnchorLink href='#services' className='btn'>
								Get Started
							</AnchorLink>
						</div>
					</div>
				</AwesomeSlider>

				{/* <div id='slider' className='carousel slider' data-ride='carousel'>
					<ol className='carousel-indicators'>
						<li data-target='#slider' data-slide-to='0' className='active' />
						<li data-target='#slider' data-slide-to='1' />
						<li data-target='#slider' data-slide-to='2' />
					</ol>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<img
								src={require("../../img/slide.png")}
								className='slider-img d-block w-100'
								alt='...'
							/>
							<div className='carousel-caption d-none d-md-block'>
								<h3>Unique and Modern Design</h3>
								<h1>Portfolio PSD Template</h1>
								<p>
									Nam liber tempor cum soluta nobis eleifend option congue nihil
									imper <br /> diet doming id quod mazim placerat facer possim
									assum.
								</p>
								<a href='#services' className='btn'>
									Get Started
								</a>
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
						      <span className="carousel-arrows"><img src={require("../../img/icons/icon-arrow-left.png")} alt="arrow-left"/></span>
						      <span className="sr-only">Previous</span>
						    </a>
						    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
						      <span className="carousel-arrows"><img src={require("../../img/icons/icon-arrow-right.png")} alt="arrow-right"/></span>
						      <span className="sr-only">Next</span>
						    </a>
				</div> */}
			</React.Fragment>
		);
	}
}

export default Slider;
