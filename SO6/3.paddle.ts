namespace s6moving{
    let board = document.querySelector('#board') as HTMLCanvasElement;
    let ctx = board.getContext('2d');

    let ballX = 400;
    let ballY = 300;
    let ballDx = -5;
    let ballDy = -5;

    function drawBall(){
        ctx.beginPath();
        ctx.arc(ballX, ballY, 10, 10, Math.PI*10, false);
        ctx.fillStyle="#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    let paddleX = board.width/2;
    let paddleW = 100;
    let paddleH = 20;
    let paddleY = 580;

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX - paddleW/2, paddleY, paddleW, paddleH);
        ctx.fillStyle="#0095DD"
        ctx.fill();
        ctx.closePath();
    }

    let leftPressed = false;
    let rightPressed = false;
    window.onkeydown = (evt) => {
        if(evt.keyCode == 37){
            leftPressed = true;
        }
        else if (evt.keyCode == 39){
            rightPressed = true;
        }
    };
    window.onkeyup = (evt) => {
        if(evt.keyCode == 37){
            leftPressed = false;
        } 
        if(evt.keyCode == 39){
            rightPressed = false;
        }
        
    }


    function draw() {

        ctx.clearRect(0, 0, board.width, board.height);
        drawBall();
        drawPaddle();
        if(ballX < 0 || ballX > board.width) {
            ballDx *= -1;
        }

        if(ballY < 0 || ballY > board.height) {
            ballDy *= -1;
        }
        ballX+=ballDx;
        ballY+=ballDy; 

        if (leftPressed == true){
            paddleX -= 7;
        }
        if (rightPressed == true){
            paddleX += 7;
        }
        if (ballY > 580){
            if (ballX > paddleX - paddleY / 2 && ballX < paddleX + paddleW / 2){
                ballDy *= -1;
            }
            else {
                console.log(ballX + ", " + ballY);
                alert ("Game Over");
                window.clearInterval(gameLoop);
            }
        }
    }


    


    let gameLoop = window.setInterval(draw, 30);

    
}