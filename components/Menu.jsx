import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
var _ = require('lodash');

import {Motion, spring, presets} from 'react-motion';

import {Navigator} from '../utils/navigator.js';

export class Menu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen:false
    }
  }
  toggleMenu(){
    if(this.props.closeSection){
      this.props.onCloseSectionClick && this.props.onCloseSectionClick();
    } else {
      this.setState({isOpen:!this.state.isOpen});
    }


  }
  render(){

    // Clone the CSS styles and set the border-color CSS property.
    // var styles = _.cloneDeep(this.constructor.styles);
    // styles.notification.borderColor = this.props.color;
    //
    var styles = _.cloneDeep(this.constructor.styles);
    let hoverStyle = {};
    if (this.state.isHover) hoverStyle = styles.containerHover;

    if(this.props.closeSection){
      styles.container.backgroundColor = '#c72020';
      styles.container.left='inherit';
      styles.container.right=10;
    }

    let menuItems = this.props.sections.map((item, i)=>{

      return <div
        className='menu-item'
        style={styles.link} key={i}
        onClick={(section_name=>(e)=>{
          Navigator.scrollTo(section_name);
          e.preventDefault();
        })(item.section)}
        >
          <i className={'icon-'+item.component.props.icon}/>

      </div>
    });

    return <Motion defaultStyle={{x: styles.container.height}}
      style={{x: spring((this.state.isOpen)? this.props.sections.length*52 : styles.container.height, presets.wobbly)}}>
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
          <div style={{...styles.toggleButton,marginTop:(this.props.closeSection)?3:7}}>
            {(this.props.closeSection)?
              <i className='icon-close'
                style={styles.icon}/>
              :
              <i className='icon-menu' style={styles.icon} />
            }

          </div>
          {
            (this.state.isOpen)?
            <div className='menu-items'>
              {menuItems}
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
    top: 20, left: 20,
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
    marginBottom:5,
    // marginBottom: 5
  },
  icon:{
    fontSize: 22,
    marginTop:7,
    color:'white'
  },
  link:{
    marginBottom:10,
    marginTop:10,
  }
}
