import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
var _ = require('lodash');

import {Motion, spring, presets} from 'react-motion';

export class Menu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen:false
    }
  }
  toggleMenu(){
    this.setState({isOpen:!this.state.isOpen});

  }
  render(){

    // Clone the CSS styles and set the border-color CSS property.
    // var styles = _.cloneDeep(this.constructor.styles);
    // styles.notification.borderColor = this.props.color;
    //
    var styles = _.cloneDeep(this.constructor.styles);
    let hoverStyle = {};
    if (this.state.isHover) hoverStyle = styles.containerHover;
    return <Motion defaultStyle={{x: (this.state.isOpen)?styles.container.height:150}}
      style={{x: spring((this.state.isOpen)? 150 : styles.container.height, presets.wobbly)}}>
      {value =>
        <div
          style={{
            ...styles.container,
            height:value.x,
            ...hoverStyle
          }}
          onClick={this.toggleMenu.bind(this)}
          onMouseOver={()=>{this.setState({isHover:true})}}
          onMouseOut={()=>{this.setState({isHover:false})}}
          >
          <div style={styles.toggleButton}>
            <i className='icon-menu' style={styles.icon} />
          </div>
          {
            (this.state.isOpen)?
            <div style={styles.link}>
              <Link
                to={prefixLink('/')}
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                >
                <i className='icon-briefcase' style={styles.icon} />
              </Link>
            </div>
            :null
          }
        </div>
      }
    </Motion>


  }
}

Menu.styles = {
  container:{
    backgroundColor: '#00695C',
    width:65,
    height:65,
    borderRadius: 50,
    position:'fixed',
    top: 20, right: 20,
    zIndex: 20,
    boxShadow: '5px 5px 10px rgba(24, 24, 24, 0.50)',
    padding: 15,
    paddingTop: 15,
    display: 'flex',
    alignItems:'center',
    //justifyContent:'center',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'background-color .5s ease-in',

  },
  containerHover:{
    backgroundColor: '#00838F',
  },
  toggleButton:{
    marginTop:7,
    cursor: 'pointer',
    
    // marginBottom: 5
  },
  icon:{
    color: 'white',
    fontSize: 22,
    marginTop:7
  },
  link:{
    marginTop:15,
  }
}
