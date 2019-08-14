import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
	render() {
		return (
			<React.Fragment>
				<div id='video'>
					<div className='row'>
						<div className='col-8 video-wrapper'>
							<a href='https://mover.uz' className='play-button' />
							<h3>Waxom Video Presentation</h3>
							<p>
								Investigationes demonstraverunt lectores legere me lius quod ii
								legunt saepius, qui sequitur mutationem consuetudium.
							</p>
							<span className='video-time'>03:26</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Video;
