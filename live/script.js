let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // ele renderiza o desenho na tela, vai ficar como 2D

let box = 32;   // 32 pixels cada quadrado.

let snake = [];

snake[0] = {

    x: 8 * box,

    y: 8 * box
}


let direction =" right";

let food = {

    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
    
}



function criarBG () {                 // fUNÇÃO CRIAR bACKGROUD
context.fillStyle = "Lightgreen"; // dEFININDO A COR DO BODY
context.fiilRect(0,0,16 * box, 16 * box);  // Desenha o retangulo, onde vai acontecer o jogo

}



function criarCobrinha() {

  for ( i=0;  i < snake.length;i++) {
   context.fillStyle = "green";
   context.fiilRect(snake[i].x, snake[i].y, box, box);

  }

}

function drawFood(){
context.fillStyle ="red";
context.fiilRect(food.x, food.y, box, box);


}


document.addEventListener('keydown', update);

function update (event) {

     if (event.keyCode == 37 && direction != "right") direction ="left";
   if ( event.keyCode == 38 && direction != "down") direction ="up";
   if ( event.keyCode == 39 && direction != "left") direction ="right";
   if ( event.keyCode == 40 && direction != "up") direction ="down";

}


function iniciarJogo() 
{
     if (snake[0].x > 15 * box && direction =="right") snake[0].x = 0;
     if (snake[0].x < 0  && direction =="right") snake[0].x =16 *16;
     if (snake[0].y > 15 * box && direction =="down") snake[0].y = 0;
     if (snake[0].y  < 0  && direction =="up") snake[0].y = 16 * box;
    
    for (i =1; i< snake.length;i++) {
if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
   clearInterval(jogo);
   alert('Game Over :(')


}

    }


     
    criarBG ();
    criarCobrinha();
    drawFood();



let snakeX = snake[0].x
let snakeX = snake[0].y

 if ( direction == "right") snakeX += box;
 if ( direction == "right") snakeX -= box;
 if ( direction == "up") snakeY += box;
 if ( direction == "down") snakeY += box;

if( snakeX != food.x || snakerY != food.y) {
snake.pop();

}
else { food.x = Math.floor(Math.random() * 15 + 1) * box;
      food.y= Math.floor(Math.random() * 15 + 1) * box;


}



snake.pop();   // Retira  o ultimo elemento do nosso array

let newHead = {

x: snakeX,
y:snakeY

}
snake.unshift(newHead);

}


let jogo = setInterval(inicialJogo, 100);



