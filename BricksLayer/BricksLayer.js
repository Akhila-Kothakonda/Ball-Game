window.addEventListener("keydown", move);
window.addEventListener("keypress", move);
window.addEventListener("keyup", move);
var p,b,rec,mouseX,mouseY;
p= document.getElementById("playGround");
   b= document.getElementById("ball");
  rec= document.getElementById("rectangles");
  bri=document.getElementById("bricks");
  
  var boxes=[];
  var box=function box (x,y){
    this.x=x;
    this.y=y;

  }
 
  p.style.left=0+'px';
  p.style.top=0+'px';
  b.style.left=30+'px';
  b.style.top=30+'px';
  rec.style.left=250+'px';
  rec.style.top=550+'px'; 
  var dir=5,val=0;
var x = 580+'px';
var y = 580+'px';
var WIDTH = 600+'px';
var HEIGHT = 600+'px';
var dragok = false;
var vx= 1;
var vy= -1;
var r=10;
var ballx=150;
var bally=150;
var set;
var j=20;
var k=0;
function init() 
{
 for(var i=40;i<600;i=i+40)
  {
    
      boxes.push(new box(i-40,j,i));
      var pos=document.createElement('div');
     pos.style.position="absolute";
    pos.style.float="left";
      pos.style.left=parseInt(i-40)+'px';
      pos.style.width = "40px";
      pos.style.height = "20px";
      pos.style.border="1px solid black";
      pos.style.background = "red";
     pos.style.display="inline";
     bri.appendChild(pos);
     
  }
   set=setInterval(drawCircle, 10);
}
function drawCircle()
{
  
  
      b.style.left=ballx;
      b.style.top=bally;
      if(ballx + vx > 590-r || ballx + vx < r) {
          vx = -vx;
      }
      if(bally + vy < r) {
          vy = -vy;
      }
      else if((bally+vy)>(570-r))
    {
        if(((ballx+'px')>rec.style.left) && ((ballx+'px')<((parseInt(rec.style.left)+80)+'px'))){
            console.log("true");
           vy=-vy;
        }
        else
        {alert("game over");
        clearInterval(set);
    }
  }
    for(var i=0;i<boxes.length;i++)
    {
      
      if(bally<20)
      {
      if(((ballx >boxes[i].x)&&(ballx<boxes[i].x+40)))
      {
        console.log("inside loop");
       console.log(boxes);
       boxes.splice(i,1);
       while (bri.firstChild) {
		    bri.removeChild(bri.firstChild);
		}
    for (var z = 0; z < boxes.length; z++) {
      var pos=document.createElement('div');
      pos.style.position="absolute";
         pos.style.float="left";
           pos.style.left=boxes[z].x+'px';
            pos.style.width = "40px";
           pos.style.height = "20px";
           pos.style.border="1px solid black";
           pos.style.background = "red";
          pos.style.display="inline";
          bri.appendChild(pos);
          }
    break;
    console.log(boxes);
     vy=-vy;
    }
    }
  }
   ballx+=vx;
      bally+=vy;
      b.style.left=ballx;
      b.style.top=bally;
     
}
function move(e)
{
dir=e.keyCode;
if((dir===39))
{
val=(parseInt(rec.style.left)+10)+'px';

  rec.style.left=val;
}
if((dir===37)&&(((rec.style.left)>0+'px')))
{
  val=(parseInt(rec.style.left)-10)+'px';

  
  rec.style.left=val;
}

}
init();



