import React, { useEffect, useRef } from 'react'
import styles from './page19.module.scss'


const Page19 = () => {
  const refCanvas = useRef()

  useEffect(() => {

    var Controls = function() {
      this.a = 5;
      this.b = 3;
      this.c = 5;
      this.time = 0;
      this.speed = 5;
      this.elementsCount = 5000;
      this.color = 'black';
    };
    
    var cases = {
      Default: {
        0: {
          a: 5,
          b: 3,
          c: 5,
          time: 15,
          speed: 2.5,
          elementsCount: 5000,
          color: 'black'
        }
      },
      
      Shell: {
        0: {
          a: 1.1,
          b: 10,
          c: 2,
          time: 23,
          speed: 1.5,
          elementsCount: 4000,
          color: 'black'
        }
      },
      
    };
    
    var json = {
      closed: false,
      remembered: cases,
      folders: {}
    };
    
    var text = new Controls();
    // var gui = new dat.GUI({
    //   load: json,
    //   preset: 'Shell'
    // });
  
    // gui.remember(text);
    
    // gui.add(text, 'a', 0, 100);
    // gui.add(text, 'b', 0.1, 10, 0.01);
    // gui.add(text, 'c', 0, 20);
    // gui.add(text, 'speed').min(0).max(10).step(0.1);
    // gui.add(text, 'elementsCount').min(100).max(10000).step(1);
    // gui.add(text, 'time')
    //  .min(-50).max(50).step(0.1).listen()
    //  .onFinishChange(function(newTime) {
    //   text.time = newTime;
    //  });
    
    // gui.addColor(text, 'color');
    
    var sizeX = 2;
    var sizeY = 2;
    
    var getDimensions = function() {
      var offsetHeight = 20; // Codepen fix
      return {
        width: 375,
        height: 600,
        offsetHeight: offsetHeight
      }
    }
    
    var canvas = refCanvas.current
    var ctx = canvas.getContext('2d');
    
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
      var radius = Math.min(dimensions.width / 2, (dimensions.height - dimensions.offsetHeight) / 2) / text.elementsCount / 10;
      var increment = text.speed / text.elementsCount; 
      ctx.fillStyle = text.color;
      var width = dimensions.width;
      var height = dimensions.height;
      
      ctx.clearRect(0, 0, width, height);
      var baseX = (width - sizeX / 2) / 2;
      var baseY = (height - sizeY / 2) / 2;
      
      for (var i = 0; i < text.elementsCount; i += 1) {
        var a = text.a * radius * i;
        var b = text.b * radius * i;
        var c = text.c * radius * i;
        var t = text.time * radius * i;
        var formulaX = (a + b) * Math.cos(t) - c * Math.cos((a / b + 1) * t);
        var formulaY = (a + b) * Math.sin(t) - c * Math.sin((a / b + 1) * t);
        var x = baseX + formulaX;
        var y = baseY + formulaY;
        
        ctx.fillRect(x, y, sizeX, sizeY);
      }
      
      text.time += increment;
      window.requestAnimationFrame(draw);
    }
    
    init();
  }, [])

  return (
    <div className={styles.wrapper}>
        <a href="https://polygonscan.com/tx/0x09ecad65ea093cce1804d2df1e270c47fd55495d6e1c071cf7fd00ba1ee1113c" target="_blank" rel="noreferrer">
      <img className={styles.nftblack} src='/images/nftblack.png'></img></a>
     <h1>Meanwhile, inside the box, Schrödinger's cat plans its revenge.</h1>
     <canvas id="canvas" ref={refCanvas}></canvas>
 </div>
  )
}

export default Page19