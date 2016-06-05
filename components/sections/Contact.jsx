import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

  }
  render(){
    return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      fixed_column={
        <SideBlock {...this.props}>
          <div >
          <div><i className={"icon-mustache"} style={{color:'#f1f1db'}}/></div>
        <div className="section-title" >{this.props.title}</div>
      <div className='section-subtitle' dangerouslySetInnerHTML={{__html:this.props.subtitle}}></div>
          </div>
          </SideBlock>
        }
      >

      <Page HTMLContent={this.props.body}>

      </Page>
      {/*<Signature  color='#000000' height={150}
        style={{position:'absolute', bottom:30, left:0, right:0, display:'flex', flexDirection:'column', alignItems:'center'}}/>*/}

    </Section>)
  }
}
