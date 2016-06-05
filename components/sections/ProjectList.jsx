 import React from 'react';
import ReactDOM from 'react-dom';
import {Project} from '../Project.jsx';
import {SVGStylish} from '../svg/SVGStylish.jsx';
import {Section} from '../Section.jsx';
import {SideBlock} from '../SideBlock.jsx';
import {Navigator} from '../../utils/navigator.js';
import {Fixed} from '../Fixed.jsx';
var _ = require('lodash');

import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import stylish from '../../pages/assets/stylish.svg';
import {slugify} from '../../utils/strings.js'


export class ProjectList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isProjectSelected: false,
      currentProject: ''
    };

  }
  // componentDidUpdate() {
  // var node = ReactDOM.findDOMNode(this);
  // //console.log(node.scrollTop, node.scrollHeight, node.getBoundingClientRect());
  // //this.setState({...node.getBoundingClientRect()});
  // //node.scrollTop = node.scrollHeight;
  // }

  scrollToSectionTop(){
    var node = ReactDOM.findDOMNode(this);
    var elementBox = node.getBoundingClientRect();
    //window.scroll(0, elementBox.top);
  }
  handleSelectProject(e, currentProject){

    ((window.isMobile)?
      Navigator
        .scrollTo(currentProject.id)
      :
      Navigator
        .scrollTo(this.props.section_name)
    )
      .then(()=>{
        this.setState({
          isProjectSelected: true,
          currentProject : currentProject
        })
      })


    this.props.onProjectOpen && this.props.onProjectOpen(e,currentProject);
  }
  handleGoToProject(pid){
    Navigator.scrollTo(pid);
  }
  handleCloseProject(){
    ((window.isMobile)?
      Navigator
        .scrollTo(this.state.currentProject.id)
      :
      Navigator
        .scrollTo(this.props.section_name)
    )
      .then(()=>{
        this.setState({
          isProjectSelected:false,
          currentProject:''
        })
      })

  }

  render(){
    const isSmallScreen = this.windowWidth<800 || this.props.isSmallScreen;

    let opensource = []
    let projects = this.props.projects.map((project, i)=>{
      let projectId = Navigator.genId([this.props.section_name,project.data.title]);
      if(project.data.type.toLowerCase() == 'opensource') {
          if(opensource.length !== 0) opensource.push(<span className="middotDivider"
          key={opensource.length+1}></span>);
          opensource.push(<span
            style={{cursor:'pointer', textDecoration:'underline'}}
            onClick={this.handleGoToProject.bind(this, projectId)}
            key={project.data.title+i}>{project.data.title}</span>)
      }
      if(!this.state.isProjectSelected) {
        return (<Project {...project}
          id={projectId}
          onClick={this.handleSelectProject.bind(this)}
          key={project.data.title}/>)
      }

      if(this.state.isProjectSelected && this.state.currentProject && project.data.title == this.state.currentProject.title){
        return (<Project {...project}
          id={projectId}
          onClose={this.handleCloseProject.bind(this)}
          currentProject = {project.data.title == this.state.currentProject.title}
          isProjectSelected = {this.state.isProjectSelected}
          onClick={this.handleSelectProject.bind(this)}
          key={project.data.title}/>)
        }
      });

    return(<Section
      {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}

      isOpen={this.state.isProjectSelected}
      openItem = {this.state.currentProject}
      fixed_column={<SideBlock {...this.props}>
        <div>
          <div><i className="icon-energy" style={{color:'#7fd093'}}/></div>
        <div className="section-title" >Recent Projects</div>
      <div className='section-subtitle'>Never Bored<br />Always Inspired</div>
        </div>
        {(!this.state.isProjectSelected)?
        <div className="section-menu-item">
          <i className="icon-social-github"/>
          <div className='inner'>
            <div >Curious to see how I code?<br />Check my opensource projects
            </div>
            <div className='item-anchors'>{opensource}</div>
          </div>
          </div>
          : null
          }

      </SideBlock>
      }
      onCloseItem={this.handleCloseProject.bind(this)}
      >
      <div style={{borderBottom:'5px solid #0C1926'}} className='striped-bg'>

        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {projects}
  </VelocityTransitionGroup>

      </div>
    </Section>)
  }
}
