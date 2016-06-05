import React from 'react';
import access from 'safe-access';
var _ = require('lodash');
import ReactDOM from 'react-dom';


/*
{(this.props.fixed_column)?
  <this.props.fixed_column
    height={this.props.windowHeight}
    isOpen={this.props.isOpen}
    percentual={percRead}
    />
  :null
}
 */

 export class SideBlock extends React.Component{
   constructor(props){
     super(props);

   }
   render(){
     var styles = _.cloneDeep(this.constructor.styles);
     var percRead;
     const isSmallScreen = this.windowWidth<800 || this.props.isSmallScreen;
     if(isSmallScreen){
       styles.fixed.position = 'absolute';

       styles.scrollable.width = styles.fixed_content_container.width = '100%';
       styles.scrollable.left = 0;
     } else {


       let isCurrent = this.props.elementBox && this.props.elementBox.top!==undefined
       && (
         this.props.elementBox.top <=0
         && this.props.elementHeight+this.props.elementBox.top>=0
         && this.props.elementHeight != this.props.windowHeight
       );
       let isAtEnd = this.props.elementBox && this.props.elementBox.bottom<this.props.windowHeight;



       if(this.props.isOpen && !isSmallScreen){
         percRead = Math.min(100, Math.floor(
           -(
             (this.props.elementBox.top)/this.props.elementHeight
            )
             * 100
           ))

       }


       //console.log(this.props.elementHeight, this.props.scrollTop, this.props.elementHeight+this.props.elementBox.top);
       if(!isCurrent || isAtEnd){

         styles.fixed.position = 'absolute';

         // styles.readingIndicator.height=0;
         // styles.readingIndicator.display='none';
       }

       if(isAtEnd){
         delete styles.fixed.top;
         styles.fixed.bottom = 0;
       }
       if(isCurrent){

       }



     }


     return <div
       style={(!isSmallScreen) ? styles.fixed: null}
       className='fixed-column'
       >
       <div style={{
           height:this.props.height}}>
           <div
             className='fixed-column-container'
             style={styles.fixed_content_container}>
             {this.props.children}
           </div>


         </div>

       </div>
   }
}

SideBlock.styles = {
  container:{
    position: 'relative',
    display: 'block'
  },
  fixed_content_container:{
    display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    height: '100%',
    color: 'white'
  },
  fixed:{
    position: 'fixed',
    top:0, left: 0,
    textAlign: 'center'
    // width:'50%'

  },
  scrollable:{
    position: 'relative',
    // width: '50%',
    // left: '50%',
    //transition: 'width .5s ease-in, left .5s ease-in',
    backgroundColor: 'white'
  },

}
