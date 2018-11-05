var canvas;
var context;

var x = 0;
var y = 0;

var dx = 0;
var dy = 0;

var timer;

window.onload = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	drawLabyrinth('labyrinth.png', 267, 5);
	
	window.onkeydown = processKey;
};

function drawLabyrinth(file, startX, startY) {

	
	dx = 0;
	dy = 0;
	
	var imgLabyrinth = new Image();
	imgLabyrinth.onload = function() {
		canvas.width = imgLabyrinth.width;
		canvas.height = imgLabyrinth.height;
		
		context.drawImage(imgLabyrinth, 0, 0);
		x = startX;
		y = startY;
		
		var imgFace = document.getElementById('face');
		context.drawImage(imgFace, x, y);
		context.stroke();
		

		
	};
	imgLabyrinth.src = file;
	

}

function processKey(e) {
	dx = 0;
	dy = 0;
	
	if (e.keyCode == 38) {
		dy = -3;
	}
	
	if (e.keyCode == 40) {
		dy = 3;
	}
	
	if (e.keyCode == 37) {
		dx = -3;
	}
	
	if (e.keyCode == 39) {
		dx = 3;
	}
	redraw();
}

function redraw() {
	
	if (dx != 0 || dy != 0) {
		context.beginPath();
		context.fillStyle = "rgb(254, 244, 207)";
		context.rect(x, y, 15, 15);
		context.fill();
		
		x += dx;
		y += dy;
		
		if (checkCollision()){
			x -= dx;
			y -= dy;
			dx = 0;
			dy = 0;
		}
		
		var imgFace = document.getElementById('face');
		context.drawImage(imgFace, x, y);
	}
	
	if (y > 579) {
		alert("Ура!Вы пошли лабиринт!")
		
	}

}

function checkCollision() {
	var imgData = context.getImageData(x - 1, y - 1, 17, 17);
	var pixels = imgData.data;  
	
	for (var i = 0; n = pixels.length, i < n; i+=4 ) {
		var red = pixels[i];
		var green = pixels[i + 1];
		var blue = pixels[i + 2];
		
		if (red == 0 && green ==0 && blue == 0) return true;
		
		if (red == 169 && green == 169 && blue == 169) {
			return true;
		}
	}
	
	return false;
}











