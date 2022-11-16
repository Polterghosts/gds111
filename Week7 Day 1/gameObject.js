var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);

//Random number function
function randomRange(high, low){
    return Math.random() * (high - low) + low;
}


ctx.fillStyle = "green";
ctx.fillRect(350, 250, 100, 100);
ctx.fillRect(550, 250, 100, 100);


function GameObject(){
    //example of proerties of a class
    this.width = randomRange(50,10);
    this.height = this.width;
    this.radius = randomRange(50, 2);
    this.x = randomRange(canvas.width, 0);
    this.y = randomRange(canvas.height, 0);
    this.vx = randomRange(10,-10)
    this.vy = randomRange(10,-10)

    this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)},${randomRange(255,0)})`;
    //this.color = "rgb("+randomRange(255,0) +""

    //this is an example of a method or function
    this.drawSquare = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //bottom of the canvas
        if(this.y > canvas.height - this.radius){
                // make sure it doesn't leave the screen
                this.y = canvas.height - this.radius;
                this.vy = -this.vy;
        }
             //top of canvas
        if(this.y < this.radius){
            this.y = this.radius;
            this.vy = this.vy * -1;
        }
        //right side of canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius;
            this.vx = this.vx * -1;
        }
        //left side of canvas
        if(this.y < this.radius){
            this.y = this.radius;
            this.vy = this.vy * -1;
        }

    }

}
// make a new instance of the square
 var square = new GameObject();

 //use dot syntax to draw the sqaure
 square.drawSquare();

 var square2 = new GameObject();
 square2.drawSquare();

 var sqaures = [];

//  sqaures[0] = new GameObject();
//  sqaures[1] = new GameObject();
//  sqaures[2] = new GameObject();
//  sqaures[3] = new GameObject();
//  sqaures[4] = new GameObject();
//  sqaures[5] = new GameObject();

//  sqaures[0],drawSquare()
//  sqaures[1],drawSquare()
//  sqaures[2],drawSquare()
//  sqaures[3],drawSquare()
//  sqaures[4],drawSquare()
//  sqaures[5],drawSquare()

//  var numSquares = 1000;

//  for(var i = 0; i<numSquares; i++){
//     sqaures[i] = new GameObject();
//     sqaures[i].drawSquare();
//  }

var circles = [];
var numCircles = 100;

for(var i = 0; i<numCircles;i++){
    circles[i] = new GameObject();
    circles[i].drawCircle();
}

function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    //loop through all objects in the arry
    for(var i = 0; i<circles.length; i++){
        circles[i].move();
        //draw circles to the screen
        circles[i].drawCircle();
    }
    //requset the animation frame
    timer = requestAnimationFrame(main);
    
}
main();