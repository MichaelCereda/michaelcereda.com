import React from 'react'

var Slider = require('react-slick');

import '../css/stripes.css';

const SLIDER_OPTIONS = {
  //dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}
export class MainSlider extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(<div className="colorsblock colorset-two">
    <Slider {...SLIDER_OPTIONS}>
        <img src='./assets/ws_bg_ny.jpg' style={{backgroundSize:'cover'}}/>
      </Slider>
        </div>)
  }
}
