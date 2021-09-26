const MAX_HEIGHT = 540;
const MAX_WIDTH = 500;
const MARGIN = 50;

const HORIZONTAL_STEP = 9;
const VERTICAL_STEP = 6;

const VARIANCE_FACTOR = 150;

const style = getComputedStyle(document.documentElement);
const BG_COLOR = style.getPropertyValue("--color-bg");
const FG_COLOR = style.getPropertyValue("--color-fg");

function setup() {
    createCanvas(MAX_WIDTH, MAX_HEIGHT + MARGIN);
    stroke(FG_COLOR);
    strokeWeight(2);
    noLoop();
}

function draw() {
    const lines = [];
    for (let i = VERTICAL_STEP + MARGIN; i < MAX_HEIGHT; i += VERTICAL_STEP) {
        const line = [];
        for (j = HORIZONTAL_STEP; j < MAX_WIDTH - HORIZONTAL_STEP ; j += HORIZONTAL_STEP) {
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
        for (let j = 0; j < lines[i].length - 1; j+=2) {
            curveVertex(lines[i][j].x, lines[i][j].y);
            fill(BG_COLOR);
            curveVertex(lines[i][j + 1].x, lines[i][j + 1].y);
        }
        endShape();
    }
}
