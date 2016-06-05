import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';

export class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    let h = this.props.scrollTop % 360; // Originally was hue 60,43%
    return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      fixed_column={<SideBlock {...this.props}><div style={{color:'#000'}}>
        <div><i className={"icon-"+this.props.icon} style={{color:'hsl('+h+', 63%, 90%)'}}/></div>
      <div className="section-title" >{this.props.title}</div>
    <div className='section-subtitle' dangerouslySetInnerHTML={{__html:this.props.subtitle}}></div>
        </div>
        </SideBlock>
      }
      >
      <Page HTMLContent={this.props.body}/>

    </Section>)
  }
}
