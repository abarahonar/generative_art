const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const padding = 60;
const step = 30;


const size = window.innerHeight - 2 * padding;
const dpr = window.devicePixelRatio;
canvas.width = size * dpr / 3;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
    const leftToRight = Math.random() >= 0.5;

    if (leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);
    } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
    }
    context.stroke();
}

for (let x = 0; x < canvas.width; x += step) {
    for (let y = 0; y < canvas.height; y += step) {
        draw(x, y, step, step)
    }
}