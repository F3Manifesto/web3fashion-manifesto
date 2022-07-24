import React, { useEffect, useRef } from 'react'
import styles from './page6364.module.scss'

const Page6364 = () => {

  const refCanvas = useRef()


  useEffect(() => {

      // Play with these!
 const N = 39;
 const FG = [197, 254, 253];
 const BG = [210, 125, 0];
 const DURATION = 5;

    var getDimensions = function() {
      var offsetHeight = 40; // Codepen fix
      var offsetWidth= 40;
      return {
        width: 1920,
        height: 1497,
        offsetHeight: offsetHeight,
        offsetWidth: offsetWidth
      }
    }
 
 // Derived:
 const style = document.createElement('style');
 var canvas = refCanvas.current
 canvas.style.background = `rgb(${BG})`;
 const ctx = canvas.getContext('2d');
 const box = document.createElement('div');
 const box2 = document.createElement('div');
 box.className = 'box';
 box2.className = 'box two';
 const state = {};

 var json = {
  closed: false,
  folders: {}
};
 
 /*function init () {
     state.w = canvas.width = dimensions.width/2;
     state.h = canvas.height = dimensions.height/2;
     ctx.strokeStyle = `rgb(${FG})`;
     
     draw();
 
   console.log(window.innerHeight)
 }*/

 
 function init() {
  var dimensions = getDimensions();
  if (canvas.getContext) {
    window.requestAnimationFrame(draw);
  }
  canvas.width = dimensions.width;

  canvas.height = dimensions.height;
}

window.addEventListener('resize', function() {
  var dimensions = getDimensions();
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;
});  

function draw() {
  var dimensions = getDimensions();

  var width = dimensions.width;
  var height = dimensions.height;

  state.w = width = dimensions.width;
  state.h = height = dimensions.height;

     const {w, h} = state;
     ctx.clearRect(0, 0, w, h);
     ctx.beginPath();
     ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
     for (let i = 0; i <= N; ++i) {
         const x = i * w / N;
         const y = i * h / N;
         
         ctx.moveTo(x, 0);
         ctx.lineTo(w - x, h);
         ctx.moveTo(0, y);
         ctx.lineTo(w, h - y);
         ctx.rect((w - x) / 2, (h - y) / 2, x, y);
         ctx.fill();
     }
     ctx.stroke();
     
     ctx.fillStyle = ctx.strokeStyle;
     ctx.fillRect(w * (1/2 - 2/N), h * (1/2 - 2/N), w * 4/N, h * 4/N);
 }


 
 const css = document.createTextNode(`
     html, body, canvas {
      width: 100%,
      height: 100%,
     }
 
     body {
         margin: 0;
     }
 
     .box {
         position: absolute;
         top: 50%;
         left: 50%;
         box-sizing: border-box;
         border: 4px solid rgb(${FG});
         transform: translate(-50%, -50%);
         animation: move ${DURATION}s steps(${N}, start) infinite;
     }
 
     .two {
         animation-delay: ${DURATION / 2}s;
     }
 
     @keyframes move {
         from {
             width: 0;
             height: 0;
             background: rgba(${FG}, 0.3);
         }
         to {
             width: 100%,
             height: 100%,
             background: rgba(${FG}, 0);
         }
     }
 `);
 style.appendChild(css);
 document.head.appendChild(style);
 
 window.addEventListener('resize', init);
 document.body.appendChild(canvas);
 document.body.appendChild(box);
 document.body.appendChild(box2);


    init();
  }, []);


  return (
    <div className={styles.wrapper}>
<a href="https://polygonscan.com/tx/0xfa5f59d8be2cefdb5e74b1b68eea4ea6d7702dc2b63197f96be066903ba53655" target="_blank" rel="noreferrer">
        <img className={styles.nftwhite} src='/images/nftwhite.png'></img>
      </a>
    
    <h1 className={styles.first}>Corridors through space and time. Machines of this revolution use web3.
A human story. </h1>
<h2 className={styles.second}>Human inguenity woven through artistic, technical, economic and cultural factories.</h2>
<h3 className={styles.third}>Deep, mathematical weaving.</h3>
<canvas id="canvas" ref={refCanvas}></canvas>
<h4 className={styles.fourth}>The pursuit of textiles and technology.</h4>
    </div>
  )
}

export default Page6364