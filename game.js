const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

canvas.width = 720;

canvas.height = 1280;

function loop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(loop);

}

loop();
