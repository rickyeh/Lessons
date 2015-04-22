var RADIUS = 45;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = 50;
var y = 50;
var direction = 0;

function drawCircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#ccc';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
}

function render() {
    if ( y === canvas.height - RADIUS) {
        direction = 1;
    } else if (y === RADIUS) {
        direction = 0;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (direction === 0) {
        drawCircle(x,++y);
    } else {
        drawCircle(x,--y);
    }
    requestAnimationFrame(render);
}

$(document).ready(function() {
    drawCircle(x, y);
    render();
});


    // $('ctx').animate({
    //     'marginTop' : '+=600px'
    // });
    // $('ctx').animate({
    //     'marginTop' : '-=600px'
    // });