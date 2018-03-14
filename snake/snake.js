/*var snake = document.getElementById('move');
var food =  document.getElementById('foodId');
var score = document.getElementById('scoreId');
var refreshIntervalId;*/

var foodx= Math.floor(Math.random() * (350)) + 1;
var foody= Math.floor(Math.random() * (350)) + 1;
var rid,lid,uid,did;
var points=0;
var snake_parts=new Array();
snake.style.position = "relative";
snake_parts.push({"x":0,"y":0});
food.style.left=foodx+'px';
food.style.top=foody+'px';
//snake_parts.push({"x":1,"y":2});
//snake_parts.push({"x":1,"y":1});
posx=0;
posy=0;
paint();
function createFood()
{
   foodx= Math.floor(Math.random() * (350)) + 1;
   foody= Math.floor(Math.random() * (350)) + 1;
   food.style.left=foodx+'px';
food.style.top=foody+'px';
}

function paint()
{
    
    
     posx = snake_parts[0].x;
     posy = snake_parts[0].y;

 

     for (var i = 0; i < snake_parts.length; i++) {
        var node = document.createElement("div");
      node.setAttribute("class","dot");
      node.setAttribute("id","dot"+i);
    
        //node.setAttribute("style",'left:'+snake_parts[i].y*10+'px;top:'+snake_parts[i].x+'px;');	
        document.getElementById("snake").appendChild(node);
    
     }
     
}
      

function right() {
  clearInterval(rid);
    clearInterval(lid);
    clearInterval(uid);
    clearInterval(did);
    //document.getElementById('left').disabled=true;
    //alert("hello");
    var elem = document.getElementById("snake"); 

    //var pos = 0;
     rid = setInterval(frame, 20);
    function frame() {
      if (posx == 385) 
      {
          alert("Game Over,Your Score"+points);

          window.location.href="file:///C:/Users/Akhila%20Kothakonda/Desktop/Training/snake/snake.html";
          points=0;
        clearInterval(rid);
      } else {
        posx++; 
        //elem.style.top = pos + 'px'; 
        elem.style.left = posx + 'px'; 
        console.log(Math.abs(foodx-posx));
        console.log(Math.abs(foody-posy));
        if(((Math.abs(foodx-posx))<20)&&((Math.abs(foody-posy))<20))
        {
            createFood();
            document.getElementById('score').innerHTML=++points;
            console.log("right");
      }
    }
    //document.getElementById('left').disabled=false;
  }
}
  function up() {
    clearInterval(uid);
    clearInterval(rid);
    clearInterval(lid);
    clearInterval(did);
    //document.getElementById('down').disabled=true;
    var elem = document.getElementById("snake");   
    //var pos = 0;
    uid = setInterval(frame, 20);
    function frame() {
      if (posy ==0) {
        alert("Game Over,Your Score"+points);

        window.location.href="file:///C:/Users/Akhila%20Kothakonda/Desktop/Training/snake/snake.html";
        points=0;
        clearInterval(uid);
       
      } else {
        posy--; 
        //elem.style.top = pos + 'px'; 
        elem.style.top = posy + 'px'; 

        console.log(Math.abs(foodx-posx));
        console.log(Math.abs(foody-posy));
        if(((Math.abs(foodx-posx))<20)&&((Math.abs(foody-posy))<20))
        {
        createFood();
        document.getElementById('score').innerHTML=++points;
        console.log("up");
        }
      }
    }
   // document.getElementById('down').disabled=false;
  }
  function down() {
    clearInterval(did);
    clearInterval(rid);
    clearInterval(uid);
    clearInterval(lid);
   // document.getElementById('up').disabled=true;
    var elem = document.getElementById("snake"); 
    
    //var pos = 0;
   did = setInterval(frame, 20);
    function frame() {
      if (posy == 370) {
        alert("Game Over,Your Score"+points);

        window.location.href="file:///C:/Users/Akhila%20Kothakonda/Desktop/Training/snake/snake.html";
        points=0;
        clearInterval(did);
        
      } else {
        posy++; 
        //elem.style.top = pos + 'px'; 
        elem.style.top = posy + 'px'; 
        console.log(Math.abs(foodx-posx));
        console.log(Math.abs(foody-posy));
        if(((Math.abs(foodx-posx))<20)&&((Math.abs(foody-posy))<20))
        {
        createFood();
        document.getElementById('score').innerHTML=++points;
        console.log("down");
        }

      }
    }
    //document.getElementById('up').disabled=false;
  }
  function left() {
    clearInterval(lid);
    clearInterval(rid);
    clearInterval(uid);
    clearInterval(did);
   // document.getElementById('right').disabled=true;
    var elem = document.getElementById("snake");   
    //var pos = 0;
     lid = setInterval(frame, 20);
    function frame() {
      if (posx == 0) {
        alert("Game Over,Your Score"+points);
        window.location.href="file:///C:/Users/Akhila%20Kothakonda/Desktop/Training/snake/snake.html";
        points=0;
        clearInterval(lid);
        
      } else {
        posx--; 
        //elem.style.top = pos + 'px'; 
        elem.style.left = posx + 'px'; 
        console.log(Math.abs(foodx-posx));
        console.log(Math.abs(foody-posy));
        if(((Math.abs(foodx-posx))<20)&&((Math.abs(foody-posy))<20))
        {
        createFood();
        document.getElementById('score').innerHTML=++points;
        console.log("left");
        }
      }
    }
   // document.getElementById('right').disabled=false;
  }

   /* //Lets paint the food
    paint_cell(food.x, food.y, "red");
    //Lets paint the score
    var score_text = "Score: " + score;
 var level_text = "Level: " + level;
    ctx.fillText(score_text, 5, h-5);
 ctx.fillText(level_text, 60, h-5);*/


//Lets first create a generic function to paint cells





