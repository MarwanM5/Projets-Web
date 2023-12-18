    
    function drawTriangle() {
        const canvas = document.getElementsByTagName("canvas") [0];
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
          
         
          ctx.fillStyle = "white";
  
         
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
  
          
          const vertices = [
            { x: 6, y: 6 },
            { x: 14, y: 10 },
            { x: 6, y: 14 }
          ];
  
          
          ctx.beginPath();
  
          
          ctx.moveTo(vertices[0].x, vertices[0].y);
  
          
          for (let i = 1; i < vertices.length; i++) {
            ctx.lineTo(vertices[i].x, vertices[i].y);
          }
  
          
          ctx.closePath();
  
          
          ctx.fill();
  
          
          ctx.stroke();

          const audio = new Audio("https://file-examples.com/storage/feaade38c1651bd01984236/2017/11/file_example_MP3_700KB.mp3");

          function playAudio() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
          }

          function stopAudio() {
            audio.pause();
            audio.currentTime = 0;
          }

          function muteAudio() {
            audio.muted = !audio.muted;
          }

          canvas.addEventListener("click", playAudio);
          document.getElementsByTagName("button")[0].addEventListener("click", playAudio);
          document.getElementsByTagName("button")[1].addEventListener("click", stopAudio);
          document.getElementsByTagName("button")[2].addEventListener("click", muteAudio);
          

        } else {
          console.log("Canvas is not supported in this browser.");
        }
      }
  
      
      window.onload = drawTriangle;