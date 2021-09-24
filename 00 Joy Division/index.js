const MAX_HEIGHT = 700;
const MAX_WIDTH = 500;
const MARGIN = 50;
const STEP = 16;
const VARIANCE_FACTOR = 100;
const MONOCHROME = [[0, 32, 63]];

function setup() {
    createCanvas(MAX_WIDTH, MAX_HEIGHT + MARGIN);
    stroke(169, 251, 215);
    strokeWeight(2);
    noLoop();
}

function draw() {
    const lines = [];
    for (let i = STEP + MARGIN; i < MAX_HEIGHT - STEP; i += STEP) {
        const line = [];
        for (j = STEP; j < MAX_WIDTH - STEP ; j += STEP) {
            const distanceToCenter = Math.abs(j - MAX_WIDTH / 2);
            const variance = Math.max(MAX_WIDTH / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
            const random = Math.random() * variance / 2 * -1;
            const point = {x: j, y: i + random};
            line.push(point);
        }
        lines.push(line);
    }

    for (let i = 0; i < lines.length; i++) {
        beginShape();
        for (let j = 0; j < lines[i].length; j+=2) {
            curveVertex(lines[i][j].x, lines[i][j].y);
            const random_index = Math.floor(Math.random() * MONOCHROME.length);
            const [r, g, b] = MONOCHROME[random_index];
            fill(r, g, b);
            curveVertex(lines[i][j + 1].x, lines[i][j + 1].y);
        }
        endShape();
    }
}
