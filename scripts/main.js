const elm = document.getElementById('frameCounter');
let frames = 0;

function update() {
    frames++;
    
    elm.innerHTML = `Frames: ${frames}`;
    requestAnimationFrame(update);
}

 update();