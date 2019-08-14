import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
	            <div id="footer">
	            	<div className="container">
	            		<div className="row mb-5">
                    <div className="col-3 about-waxom">
                      <span><img src={require('../../img/footer-logo.png')} alt="footer-logo"/></span>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.</p>
                      <a href="https://google.com">Read More</a>
                    </div>
                    <div className="col-3 recent-posts">
                      <h3>Recent Posts</h3>
                      <div className="row">
                        <div className="col-12">
                          <h6>July 30, 2019</h6>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                        </div>
                        <div className="col-12 light">
                          <hr/>
                          <h6>July 30, 2019</h6>
                          <p>Diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                        </div>
                        <div className="col-12">
                          <hr/>
                          <h6>July 30, 2019</h6>
                          <p>Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 twitter">
                      <h3>Our Twitter</h3>
                      <div className="row">
                        <div className="col-12">
                          <p><span className="text-blue">@waxom</span> Cum soluta nobis eleifend option congue nihil imperdiet doming</p>
                          <h6>3 mins ago</h6>
                        </div>
                        <div className="col-12">
                          <hr/>
                          <p>Mirum est <span className="text-blue">#envato</span> notare quam littera gothica, quam nunc putamus parum anteposuerit litterarum</p>
                          <h6>5 hours ago</h6>
                        </div>
                        <div className="col-12">
                          <hr/>
                          <p>Soluta nobis option <span className="text-grey">bit.ly/1Hniso8</span></p>
                          <h6>10 days ago</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 dribble">
                    <h3>Dribble Widget</h3>
                      <div className="row">
                        <div className="col-6 dribble-item"><span><img src={require("../../img/dribble/dribble-1.png")} alt="dribble"/></span></div>
                        <div className="col-6 dribble-item"><span><img src={require("../../img/dribble/dribble-2.png")} alt="dribble"/></span></div>
                        <div className="col-6 dribble-item"><span><img src={require("../../img/dribble/dribble-3.png")} alt="dribble"/></span></div>
                        <div className="col-6 dribble-item"><span><img src={require("../../img/dribble/dribble-4.png")} alt="dribble"/></span></div>
                      </div>
                    </div>
                  </div>
	            	</div>
                <div className="subfooter">
                  <div className="container">
                    <div className="row">
                      <div className="col-8 left">
                        <p>Copyright &copy; 2015 <span className="text-white">Waxom</span></p>
                        |
                        <p>Privacy Policy</p>
                        |
                        <p className="faq">FAQ</p>
                        |
                        <p>Support</p>
                      </div>
                      <div className="col-4 right">
                        <p>Designed by <span className="text-white">ThemeFire</span></p>
                        |
                        <p>Only on <span className="text-white">Envato Market</span></p>
                      </div>
                    </div>
                  </div>
                </div>
	          	</div>
          	</React.Fragment>
        )
    }
}

export default Footer;