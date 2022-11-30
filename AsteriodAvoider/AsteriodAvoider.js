var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main)

//asteriod variables
var numAsteroids = 20;
var asteroids = [];


//Asteriod Class
function Asteriod(){
    //properties to draw the asteroid
    this.radius = randomRange(15, 2);   
    this.x = randomRange(canvas.width - this.radius, this.radius);   
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;   
    this.vy = randomRange(10,5);   
    this.color = "white"
console.log(this.y)
    //methods (functions) to draw astroids
    this.drawAsteroid = function(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      
    }

}

//for loop to instantiate asteroids for game
for(var i = 0; i<numAsteroids; i++){
asteroids[i] = new Asteriod();
}

function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    for(var i = 0; i<asteroids.length; i++){
        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.height- asteroids[i].radius, asteroids[i].radius) - canvas.height;
            asteroids[i].x = randomRange(canvas.width- asteroids[i].radius, asteroids[i].radius)
        }

        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();

      //  console.log(asteroids[i])
    }

    //refresh the screen
    timer = requestAnimationFrame(main);
}

//Utility functions

function randomRange(high, low){
    return Math.random()*(high-low) + low;
}
