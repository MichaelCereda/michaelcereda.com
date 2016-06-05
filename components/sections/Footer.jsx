import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

  }
  render(){
    //<Page HTMLContent={this.props.body} />
    var styles = _.cloneDeep(this.constructor.styles);

    return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      >
        <Signature height={200}
          style={{position:'absolute', top:'50%', marginTop:-100, left:0, right:0,textAlign:'center'}}
          />

    </Section>)
  }
}

Footer.styles = {

}
