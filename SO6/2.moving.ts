namespace moving{
    let board = document.querySelector('#board') as HTMLCanvasElement;
    let ctx = board.getContext('2d');

    let ballX = 400;
    let ballY = 300;
    let ballDx = -2;
    let radius = 10;

    function drawBall(){
        ctx.beginPath();
        ctx.arc(ballX, ballY, radius, 10, Math.PI*10, false);
        ctx.fillStyle="#ffbac1";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {

        ctx.clearRect(0, 0, board.width, board.height);
        drawBall();
        
        if(ballX < (100+radius) || ballX > (690-radius)) {
            ballDx *= -1;
        }
        ballX+=ballDx;
        ballY+=ballDx; 
    }

    


    window.setInterval(draw, 30);

    
}