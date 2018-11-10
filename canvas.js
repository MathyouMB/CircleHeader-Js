var canvas = document.querySelector('canvas')
	;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//

//c.fillRect(100,100,100,100);
//c.stroke();

//console.log(canvas);
var x = 10//Math.random() * window.innerWidth;
var y = 10//Math.random() * window.innerHeight;

function Circle(x,y){
	this.x = x;
	this.y = y;

	this.draw = function(){
		console.log('NFKNF');
	}
}

var circle = new Circle(200,200);
circle.draw();


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
		for(var i = 0; i < 1; i++){
		
		c.beginPath();
		
		c.arc(x,y,30,0,Math.PI *2,false);
		c.strokeStyle = 'blue';
		c.fillRect(x,y,100,100);
		c.stroke();
	x += 1;
	y += 1;
}
}

animate();
