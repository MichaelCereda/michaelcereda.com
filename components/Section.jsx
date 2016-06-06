import React from 'react'
import ReactDOM from 'react-dom'
import {Navigator} from '../utils/navigator.js';

var _ = require('lodash');
import velocityHelpers from 'velocity-react/velocity-helpers';

import {SideBlock} from './SideBlock';

export class Section extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    var node = ReactDOM.findDOMNode(this);
    this.elementBox=node.getBoundingClientRect();
    this.elementHeight = node.clientHeight;
  }

  componentWillUpdate(){
    var node = ReactDOM.findDOMNode(this);
    // elementBox = this.props.node.getBoundingClientRect();
    // elementHeight = this.props.node.clientHeight;

    this.elementBox=node.getBoundingClientRect();
    this.elementHeight = node.clientHeight;

    let url = Navigator.genURL(this.props.section_name || this.props.parentName);

    if(this.elementBox.top<=0  && this.elementBox.bottom>0 && location.hash!==url){
      Navigator.setURL(this.props.section_name || this.props.parentName)

      // history.replaceState(null, null, urlId);
    }
  }
  render(){
    var styles = _.cloneDeep(this.constructor.styles);
    var isSmallScreen = this.props.windowWidth<800;


    if(this.props.scollableBgColor) styles.scrollable.backgroundColor = this.props.scollableBgColor;
    styles.scrollable.minHeight = this.props.windowHeight;

    //traditional classnames
    var sectionClass = [this.props.className];

    if(isSmallScreen) sectionClass.push('sm');
    if(this.props.isOpen) sectionClass.push('open');

    return(<section

      ref='sectionContainer'
      className={this.props.parentName}
      id={this.props.section_name}
      {...this.props}
      style={{...styles.container,
        minHeight:this.props.windowHeight}}
        className={sectionClass.join(' ')}
        >
        {(this.props.fixed_column)?
          React.cloneElement(this.props.fixed_column,
            {
              height:this.props.windowHeight,
              isOpen:this.props.isOpen,
              elementBox: this.elementBox,
              elementHeight: this.elementHeight,
              isSmallScreen:isSmallScreen
            })
            : null
          }
          {
            (this.props.fixed_column)?
            <div style={styles.scrollable} className='scrollable-column'>
              {this.props.children}
            </div>
            :
            <div>
              {this.props.children}
            </div>
          }


          </section>)
        }
      }
      // {this.state.elementHeight} |
      // {this.this.state.elementBox.top} |
      // {this.state.elementHeight+this.this.state.elementBox.top}
      Section.animations = {
        open: (pos)=>{velocityHelpers.registerEffect({
          defaultDuration: 750,
          calls:
          [
            [{translateX: buttonPosition.left, translateY: buttonPosition.top}],
            [{translateX: buttonPosition.left, translateY: '180px'}]
          ]
        })
      }
    }
    Section.styles = {
      container:{
        position: 'relative',
        display: 'block'
      },
      scrollable:{
        position: 'relative',
        // width: '50%',
        // left: '50%',
        //transition: 'width .5s ease-in, left .5s ease-in',
        backgroundColor: 'white'
      },

    }
