canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
marsimg="mars.jpg";
roverimg="rover.png";
Roverx= 10;
Rovery=30;
RoverWidth=100;
RoverHeight=100;

function add(){
marscanvasimg=new Image();
marscanvasimg.src=marsimg;
marscanvasimg.onload= uploadBackground;
rovercanvasimg= new Image();
rovercanvasimg.src=roverimg;
rovercanvasimg.onload= uploadRover;
}

function uploadBackground(){
ctx.drawImage(marscanvasimg,0,0,canvas.width,canvas.height);
}

function uploadRover(){
ctx.drawImage( rovercanvasimg,Roverx,Rovery,RoverWidth,RoverHeight);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 console.log(e);
  var keypressed=e.keyCode;
  if (keypressed=="38") {
  up();
  console.log("up arrow key is pressed");

  }
  if(keypressed=="40"){
down();
console.log("down arrow key is pressed");
  }
  if(keypressed=="37"){
    left();
    console.log("left arrow key is pressed");
      }
      if(keypressed=="39"){
        right();
        console.log("right arrow key is pressed");
          }
}
function down(){
if(Rovery<=500){
Rovery=Rovery+10;
console.log("Roverx="+Roverx+"Rovery="+Rovery);
uploadBackground();
uploadRover();

}
}
function left(){
    if(Roverx>=0){
    Roverx=Roverx-10;
    console.log("Roverx="+Roverx+"Rovery="+Rovery);
    uploadBackground();
    uploadRover();
    
    }
    }
    function right(){
        if(Roverx<=900){
        Roverx=Roverx+10;
        console.log("Roverx="+Roverx+"Rovery="+Rovery);
        uploadBackground();
        uploadRover();
        
        }
        }

function up() {
if (Rovery>=0){
Rovery=Rovery-10;
console.log("Roverx="+Roverx+"Rovery="+Rovery);
uploadBackground();
uploadRover();
}
}
