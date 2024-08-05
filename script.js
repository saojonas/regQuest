// Correct values for R0, R1, R2, R3
const correctValues = ['14', '1579', '0', '11'];
let animationState = 'neutral'; // neutral, success, fail

document.getElementById('submitBtn').addEventListener('click', () => {
    const R0 = document.getElementById('R0').value;
    const R1 = document.getElementById('R1').value;
    const R2 = document.getElementById('R2').value;
    const R3 = document.getElementById('R3').value;

    if (R0 === correctValues[0] && R1 === correctValues[1] && R2 === correctValues[2] && R3 === correctValues[3]) {
        animationState = 'success';
        const now = new Date();
        alert(`Autenticação realizada! ${now.toLocaleString()}`);
    } else {
        animationState = 'fail';
        alert('Valores incorretos, tente novamente.');
    }
});

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasContainer');
}


