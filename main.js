canvas=document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

color="blue" 

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 5;
ctx.arc(280, 250, 50, 0, 2*Math.PI)
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth= 5;
ctx.arc(400, 250, 50, 0, 2*Math.PI)
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth= 5;
ctx.arc(520, 250, 50, 0, 2*Math.PI)
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle="Yellow";
ctx.lineWidth= 5;
ctx.arc(340, 310, 50, 0, 2*Math.PI)
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="Green"
ctx.lineWidth= 5;
ctx.arc(460, 310, 50, 0, 2*Math.PI)
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth= 3;
ctx.rect(100,100,600,400)
ctx.stroke();