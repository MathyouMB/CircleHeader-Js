var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//

//c.fillRect(100,100,100,100);
//c.stroke();

//console.log(canvas);
//var x = 10//Math.random() * window.innerWidth;
//var y = 10//Math.random() * window.innerHeight;
//19:53

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
var mouseDis = 75;
//var minRadius = 2;

var colorArray = [
	'#2A4D69',
	'#4B86B4',
	'#ADCBE3',
	'#E7EFF6',
	'#63ACE5',

];

window.addEventListener('mousemove', function(event){
		mouse.x = event.x;
		mouse.y = event.y;

});


window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minimumRadius = radius;
	this.color =  colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
		//c.strokeStyle = 'blue';
		//c.fillRect(x,y,100,100);
		//c.stroke();
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function(){
		if(this.x+this.radius>innerWidth || this.x -this.radius <0){
			this.dx= -this.dx;
		}

		if(this.y+this.radius>innerHeight || this.y - this.radius <0){
			this.dy= -this.dy;
		}

		this.x +=this.dx;
		this.y +=this.dy;
		
		if((mouse.x - this.x <mouseDis && mouse.x - this.x > -mouseDis)&&(mouse.y - this.y <mouseDis && mouse.y - this.y > -mouseDis)){
				if(this.radius < maxRadius){
					this.radius +=2;
				}
				
		}else if(this.radius > this.minimumRadius){
				this.radius -=1;
		}

		this.draw();	

	}
}



var circleArray = [];


function init(){
	circleArray = [];
	for(var i =0; i<400; i++){
		var x = Math.random() * (innerWidth - radius*2)+ radius;
		var y = Math.random() * (innerHeight - radius*2)+ radius;
		var dx = (Math.random() -0.5)*8;
		var dy = (Math.random() -0.5)*8;
		var radius = Math.random()* 4 + 2;
		circleArray.push(new Circle(x,y,dx,dy,radius)); 
	}
}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i=0;i<circleArray.length; i++){
		circleArray[i].update();
	}
}


animate();
init();
