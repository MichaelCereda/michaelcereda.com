import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import _ from 'lodash';
import access from 'safe-access';
import {Menu} from '../components/Menu.jsx'
import {MainSlider, ProjectList, AboutMe, Contact, Medium, Footer} from '../components/sections';

import {Navigator} from '../utils/navigator.js';
import mobilecheck from '../utils/mobilecheck.js';
// Styles for highlighted code blocks.
import 'css/zenburn.css'


/*
#f9ffa2,
#aafd6d 600px,
#00e2c5 900px,
#00a7a8 1200px,
#312633 1500px,
#ff6b6b 1800px,
#ffffff 2100px
*/




export default class Index extends React.Component {
  constructor(props){
    super(props);

    this.sortedPages = _.sortBy(props.route.pages,
      (page) => access(page, 'data.date')
    ).reverse()

    this.pageGroups = _.groupBy(props.route.pages, 'file.dirname');
    this.pageGroups.root =
    _.mapValues(_.groupBy(this.pageGroups[""], "file.name"), arr => arr[0]);
    delete this.pageGroups[""];
    this.state = {
      windowWidth:0,
      windowHeight: 0,
      menuCloseSection:false
    }


    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleSectionOpen(e){
    this.setState({
      menuCloseSection:true
    });
    //this.props.onSectionOpen && this.props.onSectionOpen(e);
  }



  componentDidMount() {
    window.isMobile = window.mobilecheck();

    this.setState({
      windowWidth: window && window.innerWidth,
      windowHeight: window && window.innerHeight,
    });
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleResize(e){
    this.setState({
      windowWidth: window && window.innerWidth,
      windowHeight: window && window.innerHeight,
    });
  }
  handleScroll(event) {
    // let urlId = '#/'+(this.props.anchor_name || this.props.parentName);
    // if(this.elementBox.top<=0  && this.elementBox.bottom>=0 && location.hash!==urlId){
    //
    //   history.replaceState(null, null, urlId);
    // }

    this.setState({
      scrollTop: event.srcElement.body.scrollTop,
      scrollHeight: event.srcElement.body.scrollHeight,

      activeSection: event.srcElement.body.scrollHeight/event.srcElement.body.scrollTop
    });
    //debugger;
    // console.log(
    //   this.state.scrollTop,
    //   this.state.scrollHeight,
    //   this.state.activeSection,
    //   this.state.scrollHeight/this.state.windowHeight
    // );
  }

  render () {

    let sitemap = [
      {
        section: 'home',
        component: <MainSlider
          {... this.state }
          className='color-one'
          icon='home'
          {...this.pageGroups.root.intro.data}/>
      },
      {
        section: 'projects',
        component: <ProjectList
          icon='energy'
            className='color-two projects'
            {... this.state }
            projects={this.pageGroups.projects}
            onProjectOpen={this.handleSectionOpen.bind(this)}/>
        },
      {
        section: 'about_me',
        component: <AboutMe
            className='color-three about'
            {... this.state }
            {...this.pageGroups.root.about_me.data} />
        },
        {
          section: 'medium',
          component: <Medium
            icon='book-open'
              className='color-four'
              {... this.state }/>
          },
          {
            section: 'contact',
            component: <Contact
                className='color-five contact'
                {... this.state }
                {...this.pageGroups.root.contact.data}
                icon='envelope'/>
            },

      ];
      Navigator.load(sitemap);
    //sortedPages.forEach((page) => {
    return (<div style={{position:'relative'}}>
    <Menu
      sections={sitemap}
      />
    {
      sitemap.map(function(item, index) {
        let el = React.cloneElement(item.component, {
            key:item.section,
            section_name:item.section,
            ref:item.section
          });

        return el;
      })
    }
    <Footer
        className='color-six footer'
        {... this.state }
         />
</div>


)
//  {/*className='color_2'*/}
}
}
