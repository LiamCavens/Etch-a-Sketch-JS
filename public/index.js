var deltaX = 0;
var deltaY = 0;

window.addEventListener('load', function(){
    const canvas = document.querySelector('#main-canvas');
    const context = canvas.getContext("2d");

    context.beginPath();
    context.arc(75, 485, 52, 0, Math.PI * 2, true);
    context.fillStyle='white';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(75, 485, 50, 0, Math.PI * 2, true);
    context.fillStyle='white';
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(925, 485, 52, 0, Math.PI * 2, true);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.arc(925, 485, 50, 0, Math.PI * 2, true);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(50, 15, 900, 400);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();

    context.font='italic 40px sans-serif';
    context.fillText("Etch-a-Sketch", 400, 500, 300);
    
    const changeColor = function(){
        context.strokeStyle = this.value;
        
    }

    const colorPicker = document.querySelector('#input-color');
    colorPicker.addEventListener('change', changeColor);

    const drawImage = function(x, y) {
        const img = document.createElement("img");
        img.src = "https://i.imgur.com/6XrO4uS.jpg"
        
        img.addEventListener('load', function(){
            context.drawImage(img, x, y, 48, 49);
        })
    }

    const drawCircle = function(x, y) {
        context.beginPath();
        context.arc(x, y, 50, 0, Math.PI * 2);
        context.stroke();
    }

    window.addEventListener("keydown", moveSomething, false);
    function moveSomething(key) {
        switch (key.keyCode) {
            case 37:
                deltaX -= 2;
                break;
            case 38:
                deltaY -= 2;
                break;
            case 39:
                deltaX += 2;
                break;
            case 40:
                deltaY += 2;
                break;
        }
        freeDraw()
    }       

    const freeDraw = function(){
        context.beginPath();
        context.arc(510 + deltaX, 210 + deltaY, 1, 0, Math.PI * 2);
        context.fillStyle = 'black';
        context.fill();
        context.stroke();
    }


    
    canvas.addEventListener('click', function(event) {
        console.log("clicked", event.x, event.y);
        freeDraw(510, 210);
        moveSomething();
    })
});