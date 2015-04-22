
var canvas = document.getElementById('myCanvas');

function drawCircle() {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(50, 50, 45, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#ccc';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ccc';
    ctx.stroke();
}

function repeatFunction() {
    $('#myCanvas').animate({
        'marginTop' : '+=600px'
    });
    $('#myCanvas').animate({
        'marginTop' : '-=600px'
    });
    requestAnimationFrame(repeatFunction);
}

$(document).ready(function() {
    repeatFunction();
    drawCircle();
});