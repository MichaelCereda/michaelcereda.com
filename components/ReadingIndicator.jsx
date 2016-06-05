import React from 'react'
import ReactDOM from 'react-dom'

var _ = require('lodash');
import velocityHelpers from 'velocity-react/velocity-helpers';

export class ReadingIndicator extends React.Component{
  render(){
    var styles = _.cloneDeep(this.constructor.styles);

    if(this.props.percentual>85){
      styles.bar.backgroundColor= '#f2d53d';
    }
    return (
      <div style={styles.readingIndicator}>
        <div style={styles.meta}>
          <div>You're currently reading</div>
          <div>{this.props.label}</div>
        </div>
        <div style={{...styles.bar, width:this.props.percentual+'%'}} />
      </div>
    );
  }
}

ReadingIndicator.styles = {
  readingIndicator:{

    position:'fixed',
    bottom:0, left:0, right:0,
    color: 'white',
    textAlign:'left',

  },
  bar:{
    backgroundColor: '#4fd13b',
    height:10,
    width: 0
  },
  meta:{
    paddingLeft:10,
    paddingRight:10,
  }
}
