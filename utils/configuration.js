
const Configuration = {
  maxWidth : 960
}

const screenSizesList = {
  'big': 1500,
  'medium': 800,
  'small':0
}
let getScreenSizeRange = () =>{
  const windowWidth = window && window.innerWidth;
  const windowHeight= window && window.innerHeight;

  for(var size in screenSizesList){
    if(windowWidth > screenSizesList[size]) return size;
  }
};

let isSmallScreen = ()=>{

}
export {Configuration, isSmallScreen}
