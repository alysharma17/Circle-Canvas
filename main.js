var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color= "black";
var width=5;
var mouseEvent="empty";
var radius=500;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  color=document.getElementById("color_get").value;
  width=document.getElementById("width").value;
  radius=document.getElementById("radius").value;
  mouseEvent="mousedown";
      ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
  mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
  current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y=e.clientY-canvas.offsetTop; 
  if (mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
}
function clear() 
{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}