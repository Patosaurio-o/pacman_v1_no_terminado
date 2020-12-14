let nivel_1 = [
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
  [2,1,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
  [2,3,2,0,2,1,2,0,2,1,2,1,2,0,2,1,2,0,2,3,2],
  [2,1,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2],
  [2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,2,2,2,2,1,2,2,2,0,2,0,2,2,2,1,2,2,2,2,2],
  [0,0,0,0,2,1,2,0,0,0,7,0,0,0,2,1,2,0,0,0,0],
  [0,0,0,0,2,1,2,0,2,2,0,2,2,0,2,1,2,0,0,0,0],
  [2,2,2,2,2,1,2,0,2,0,0,0,2,0,2,1,2,2,2,2,2],
  [0,0,0,0,0,1,0,0,2,4,5,6,2,0,0,1,0,0,0,0,0],
  [2,2,2,2,2,1,2,0,2,2,2,2,2,0,2,1,2,2,2,2,2],
  [0,0,0,0,2,1,2,0,0,0,0,0,0,0,2,1,2,0,0,0,0],
  [0,0,0,0,2,1,2,0,2,2,2,2,2,0,2,1,2,0,0,0,0],
  [2,2,2,2,2,1,2,0,2,2,2,2,2,0,2,1,2,2,2,2,2],
  [2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
  [2,1,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
  [2,3,1,1,2,1,1,1,1,1,0,1,1,1,1,1,2,1,1,3,2],
  [2,2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,2,2],
  [2,2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,2,2],
  [2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,2],
  [2,1,2,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,2,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

let pacman = document.getElementById("pacman");

let count = {
  x: 10,
  y: 19
}

let move = {
  x: 258,
  y: 430,
  ladoA: 38,
  ladoB: 478,
  ladoC: 58,
  ladoD: 458
}

let score = {
  total:0,
  HI:10000,
  vida:3
}

let audio = document.getElementById("audio");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");

function audioPlay(){ 
  audio.play();
}

function audio2Play(){
  audio2.play();
}

function audio3Play(){
  audio3.play();
} 


function displayWorld(){ 
  let mapa = '';
  for(let i=0; i<nivel_1.length;i++){
    mapa += "<div class='row'>";
    for(let j=0; j<nivel_1[i].length; j++){
      if(nivel_1[i][j] == 3){
        mapa  += "<div class='cherry'></div>";
      }
      else if(nivel_1[i][j] == 2){
        mapa  += "<div class='brick'></div>";
      }
      else if(nivel_1[i][j] == 1){
        mapa += "<div class='coin'></div>";
      } 
      else if(nivel_1[i][j] == 0){
        mapa += "<div class='empty'></div>";
      }
      else if(nivel_1[i][j] == 4){
        mapa += "<div class='rosa'></div>";
      } 
      else if(nivel_1[i][j] == 5){
        mapa += "<div class='celeste'></div>";
      } 
      else if(nivel_1[i][j] == 6){
        mapa += "<div class='naranja'></div>";
      }
      else if(nivel_1[i][j] == 7){
        mapa += "<div class='rojo'></div>";
      }
    }
    mapa  += "</div>";
  }
  
  console.log(mapa);
  document.getElementById('nivel').innerHTML = mapa;
}

function update(){
  pacman.style.left = move.x+"px";
  pacman.style.top = move.y+"px";
  if(move.x == move.ladoA){
    move.x = move.ladoD;
    count.x = 20;  
  }else if(move.x == move.ladoB){
    move.x = move.ladoC;
    count.x = 0;
  }
}

if(score.total == 0){
  audioPlay();
}

function myScore(){
  document.getElementById('maxScore').innerHTML = score.HI;
  document.getElementById('Score').innerHTML = score.total;
  document.getElementById('vidas').innerHTML = score.vida;
  if(score.total >= score.HI){
    score.HI = score.total;
  }
  if(score.total == 2000){
    score.vida++;
  }
  if(score.vida == 0){
    alert('perdiste!!!! reinicia para volver a intentar.')
  }
  if(score.total == 2020){
    alert('Felicitaciones!!! no ganaste nada :v')
  }
}

function vidaMenos(){
  if(nivel_1[count.y][count.x] == 7 || nivel_1[count.y][count.x] == 6 || nivel_1[count.y][count.x] == 5 || nivel_1[count.y][count.x] == 4){
    audio3Play();
    score.vida--;
    move.x = 258;
    move.y = 430;
    count.x = 10; 
    count.y = 19; 
    myScore(); 
  }
}

document.onkeydown = function(e){
  if(e.keyCode == 37 && nivel_1[count.y][count.x-1] != 2) { 
    pacman.style.transform = 'rotate(180deg)';
    move.x -= 20;
    count.x--;
  }
  else if (e.keyCode == 39 && nivel_1[count.y][count.x+1] != 2) { 
    pacman.style.transform = 'rotate(0deg)';
    move.x += 20;
    count.x++;    		
  }
  else if (e.keyCode == 40 && nivel_1[count.y+1][count.x] != 2) { 
    pacman.style.transform = 'rotate(90deg)';
    move.y += 20;
    count.y++;
  }
  else if (e.keyCode == 38 && nivel_1[count.y-1][count.x] != 2) { 
    pacman.style.transform = 'rotate(270deg)';
    move.y -= 20;
    count.y--;
  }
  if(nivel_1[count.y][count.x] == 1){
    audio2Play();
    nivel_1[count.y][count.x] = 0;
    displayWorld();
    score.total+=10;
    myScore();
  }
  if(nivel_1[count.y][count.x] == 3){
    audio2Play();
    nivel_1[count.y][count.x] = 0;
    displayWorld();
    score.total+=50;
    myScore();
  } 
  vidaMenos();
  update(); 
}
displayWorld(); 