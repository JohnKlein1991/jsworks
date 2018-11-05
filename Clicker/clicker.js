var click = 0;

var canvas = document.getElementById('canvasid');
canvas.onclick = increment;
var context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = 'red';
	context.arc(canvas.width/2, canvas.height/2, 50, 0 ,2*Math.PI);
	context.fill();

function increment(e) {
	var x = e.clientX - 240;
	var y = e.clientY - 160;
	var dist = Math.sqrt(y*y + x*x);
	if(dist < 50){
			click++;
	context.clearRect(190, 50, 150, 40);
	redraw();
	}

}



function redraw() {
	context.font = '20px Verdana';
	context.fillText('Клики: ' + click, 190, 70);
	context.beginPath();
	context.fillStyle = 'red';
	context.arc(canvas.width/2, canvas.height/2, 50, 0 ,2*Math.PI);
	context.fill();
}

