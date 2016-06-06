import React from 'react';
import {Section} from '../Section.jsx';
import {SideBlock} from '../SideBlock.jsx';

var _ = require('lodash');
import 'whatwg-fetch';

class StoryMeta extends React.Component{

  render(){
    var styles = _.cloneDeep(this.constructor.styles);
    return <div>
      <div style={{...styles.metadata, ...styles.tagLine}}>
        <i className='icon-tag'/>
        {this.props.post.virtuals.tags.map((tag,i)=>{
          return <span style={{marginLeft:5, marginRight:5}} key={i}>{tag.name}</span>
        })}
        </div>
      <div style={styles.boundingBox}>
        <img style={styles.avatar} src={'https://cdn-images-1.medium.com/fit/c/40/40/'+this.props.author.imageId} />
      <div style={styles.metaBox}>
      <div style={styles.name}>{this.props.author.name}</div>
    <div style={styles.metadata}>
    {this.props.post.virtuals.latestPublishedAtAbbreviated}
    <span className="middotDivider"></span>
  { Math.ceil(this.props.post.virtuals.readingTime) + ' min read'}
    </div>

      </div>
      </div>
    </div>
  }
}
StoryMeta.styles = {
  boundingBox:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1em'
  },
  avatar:{
    borderRadius: '50%'
  },
  metadata:{
    fontSize: 12,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
        color: 'rgba(0,0,0,.44)',

  },
  tagLine:{
    fontSize:14, fontWeight:400, marginBottom: 10,
    display: 'flex',
    alignItems: 'center'
  },
  metaBox:{

    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: 14,
    lineHeight: 1.4,
    paddingLeft: 10,
    textRendering: 'auto'
  },
  name:{
    color: 'rgb(0, 171, 107)',
    fontSize: 14,
    lineHeight: 1.4
  }
}
class Story extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    var styles = _.cloneDeep(this.constructor.styles);
    return <a style={styles.boundingBox}
      target='_blank'
       href={'https://medium.com/@'+this.props.me.username+'/'+this.props.uniqueSlug}>
       <StoryMeta author={this.props.me} post={this.props}/>
    <span style={styles.title}>{this.props.title}</span>
  <p style={styles.preview}>{this.props.previewContent.bodyModel.paragraphs[1].text}</p>
    </a>
  }
}
Story.styles = {
  boundingBox:{
    borderRadius: 3,
    backgroundColor:'white',
    marginBottom:10,
    padding:10,
    paddingBottom:'1em',
    boxShadow: '0 1px 4px rgba(0,0,0,.04)',
    border: '1px solid rgba(0,0,0,.09)',
    textDecoration: 'none',
    display: 'block'
  },
  title:{
    color: 'rgba(0,0,0,.8)',
    fontFamily: '"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
    fontWeight: 700,
    fontSize: 31,
    marginLeft: -1.94,
    lineHeight: 1.12,
    letterSpacing: '-.022em'
  },
  preview:{
    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
    fontWeight: 400,
    marginTop: 13,
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: '-.004em',
    color: 'rgba(0,0,0,.8)'
  }
}
export class Medium extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts:[],
    }

  }

  componentDidMount(){
    fetch('https://michaelcereda.com/scrapers/medium.php')
    .then((res)=>{
      return res.json();
    }).
    then((json_res)=>{
      this.setState(json_res);
    })
    .catch(function(ex) {
    console.log('parsing failed', ex)
  });
  }
  render(){
    let stories = this.state.posts.map((post,i)=>{
      return <Story {...post} me={this.state.me} key={i}/>
    });
    let storiesContainer={};
    if(!this.state.posts.length){
      stories = <h3>I can't contact medium right now, try refreshing the page</h3>;
      storiesContainer = {
          position : 'absolute',
          top : 0,
          bottom : 0,
          padding: '5em',
          paddingRight: '5em',
          textAlign:'center',
          color: '#525252',
          display: 'flex',
          alignItems: 'center'
      };



    }

    return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      fixed_column={<SideBlock {...this.props}>
        <div className='meta-container'>
          <div><img src='./assets/medium-lockup-white.png' width='50%'/></div>
          <div className='section-subtitle'>Sometimes i write blogposts<br/>about nerdy stuff</div>
        </div>
        </SideBlock>
      }
      scollableBgColor='#FAFAFA'
      >
      <div style={{padding:10, display:'flex', flexDirection:'column', ...storiesContainer}}>
      { stories }
      </div>
    </Section>)
  }
}
