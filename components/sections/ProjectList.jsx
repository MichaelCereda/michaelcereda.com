import React from 'react';
import {Project} from '../Project.jsx';

export class ProjectList extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    return(<div>
      {this.props.projects.map((project, i)=>{
        return (<Project {...project} key={i}/>)
      })}
    </div>)
  }
}
