import React from 'react';
import access from 'safe-access';

export class Project extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    let {title, body, platform, technologies} = this.props.data;
    var styles = _.cloneDeep(this.constructor.styles);

    return(<div style={styles.smallBox}>
      <div style={styles.header}></div>
      <div style={styles.title}>
        {title}
      </div>
      {platform}
      {technologies}

    </div>)
  }
}

Project.styles = {
  smallBox:{
    borderRadius: '.3em',
    backgroundColor: 'white',
    width: '33%'
  },
  header:{
    height: 60,
    borderRadius: '.3em .3em 0 0',
    backgroundColor: 'rgb(34, 148, 52)'

  },
  title:{
    color:'black'
  }
}
