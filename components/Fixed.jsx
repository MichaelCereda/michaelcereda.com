import React from 'react';
import access from 'safe-access';
var _ = require('lodash');

export class Fixed extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    var styles = _.cloneDeep(this.constructor.styles);

    return(<div style={styles.container}>{this.props.children}</div>)
  }
}

Fixed.styles = {
  container:{
    position: 'fixed',
    width: '50%'
  }
}
