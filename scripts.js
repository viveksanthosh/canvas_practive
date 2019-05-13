const canvas = document.getElementById('canvas');

const Canvas = canvas.getContext('2d');
Canvas.moveTo(100, 100);
Canvas.lineTo(100, 200);
Canvas.lineTo(200, 200);
Canvas.lineTo(200, 100);
Canvas.lineTo(100, 100);
Canvas.stroke();