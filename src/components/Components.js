import React, { Component } from 'react';
import Slider from './slider/Slider'
import Services from './services/Services'
import About from './about/About'
import Projects from './projects/Projects'
import Video from './video/Video'
import Mobile from './mobile/Mobile'
import Stats from './stats/Stats'
import Posts from './posts/Posts'
import Partners from './partners/Partners'
import Footer from './footer/Footer'

class Components extends Component {
    render() {
        return (
            <React.Fragment>
              <Slider></Slider>
              <Services></Services>
              <About></About>
              <Projects></Projects>
              <Video></Video>
              <Mobile></Mobile>
              <Stats></Stats>
              <Posts></Posts>
              <Partners></Partners>
              <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Components;