import React from 'react';
import access from 'safe-access';
var _ = require('lodash');

export class Page extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    var styles = _.cloneDeep(this.constructor.styles);
    if(React.Children.count(this.props.children)){
      return(<div className="page">
        <div dangerouslySetInnerHTML={{__html:this.props.HTMLContent}}></div>
        {this.props.children}
      </div>)
    }
    return(<div className="page" dangerouslySetInnerHTML={{__html:this.props.HTMLContent}}></div>)
  }
}

Page.styles = {
  page:{
    padding: 20
  }
}
