import './App.css';
import Main from './components/MainComponent';
import React, {useEffect, useState} from 'react'
import { HashRouter as Router} from 'react-router-dom';
import './App.scss';
import {IMAGES} from './shared/Images'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

gsap.registerPlugin(ScrollTrigger);


function App() {

const [isLoading, setIsLoading] = useState(true)
useEffect(()=>{
  const imgs= IMAGES
  cacheImages(imgs)
  document.querySelector("body").scrollTo(0,0)
})

const cacheImages = async(srcArray)=>{
  const promises = await srcArray.map((src)=>{
    return new Promise(function(resolve, reject){
      const img = new Image();
      img.src = src
      img.onload = resolve();
      img.onerror = reject();
    })
  });
  await Promise.all(promises);
  setIsLoading(false)
  // setTimeout(function(){
  //   setIsLoading(false)},3000
  // );
}


    return(
      <div>
        {isLoading || !document.fonts.ready
        ?
        <div>
        <h1>Loading</h1>
      </div>
      :
       <Router >
        <div className="App fluid">
          <Main/>
        </div>
      </Router>}
      </div>
    )
  }


// const cacheImages = async function(IMAGES) {
//   const promises = await IMAGES.map((src)=>{
//     const img = new Image();
//     img.src = src;
//     img.onload = resolve()
//     img.onerror = reject()
//   })
//   await Promise.all(promises)
//   this.setState({loading:false});
// };

export default App;