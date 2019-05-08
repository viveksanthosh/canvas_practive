const canvas = document.getElementById('canvas');

const Canvas = canvas.getContext('2d');

Canvas.moveTo(0, 0);
Canvas.lineTo(1000, 1000);
Canvas.stroke();