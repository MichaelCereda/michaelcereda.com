let smooth = {
  /*
  * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
  */
  defaultEasing : function (x) {
    'use strict';

    if(x < 0.5) {
      return Math.pow(x*2, 2)/2;
    }
    return 1-Math.pow((1-x)*2, 2)/2;
  }
}

import Promise from 'bluebird';
import S from 'string';



class ScrollHelper{
  constructor(){
    this.timeLapsed = 0;
    this.duration = 1000;
    this.interval = 16;
  }
  startAnimateScroll (endLocation, endCb) {
    clearInterval(this.animationInterval);
    this.timeLapsed = 0;
    this.startLocation =window.pageYOffset;
    this.animationInterval = setInterval(this.loopAnimateScroll(endLocation,endCb), this.interval);
  }
  loopAnimateScroll(endLocation, cb) {
    let _cb = cb;
    return ()=>{
      this.timeLapsed += this.interval;
      if(this.duration<=this.timeLapsed){
        clearInterval(this.animationInterval);
        window.scroll( 0, endLocation);
        _cb && _cb();
      }
      let distance = endLocation-this.startLocation;
      let speed = distance/(this.duration);
      let time = ( this.timeLapsed / this.duration);
      let pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
      let position = this.startLocation+ distance * pattern;//this.startLocation + (  speed );
      window.scroll( 0, Math.floor(position) );
      //stopAnimateScroll(position, endLocation);
    }
  };

  stopAnimateScroll(position, endLocation) {
    var currentLocation = window.pageYOffset;
    if ( position == endLocation || currentLocation == endLocation) {
      clearInterval(this.animationInterval);
    }
  };
}


class Navigator {
  static load(sitemap){
    this.scrollHelper = new ScrollHelper();

  }
  static genId(arr){
    return arr.map((item)=>{
      return S(item).slugify().s
    }).join('-');
  }
  static genURL(section_name, subsection=""){
    let url = '#'+(S(section_name).slugify().s);
    if(subsection){
      url+='/'+S(subsection).slugify().s;
    }
    return url;
  }

  static setURL(section_name, subsection=""){
    let urlId = Navigator.genURL(section_name, subsection);
    history.replaceState(null, null, urlId);
    return urlId;
  }
  static goToHash(timeout, exclude){
    let _hash = window.location.hash.substr(1);
    if(exclude.indexOf(_hash)!==-1) return;
    setTimeout(()=>{
      Navigator.scrollTo(_hash);
    }, timeout)


  }

  static scrollTo(section_name){

    return new Promise((resolve,reject)=>{
      if(!section_name.trim()) resolve();
      var endlocation = window.pageYOffset
                        + document.getElementById(section_name).getBoundingClientRect().top
                        + 1;
      this.scrollHelper.startAnimateScroll(endlocation, resolve);
    });



    //window.scroll(0,document.getElementById(section_name).offsetTop)

  }

}

export { Navigator };
