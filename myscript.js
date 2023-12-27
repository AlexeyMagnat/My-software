var path = document.getElementById('svgPath');
var shape = document.getElementById('animatedShape');
var step = 1; // distance to move each step (can be adjusted)

function animate(time) {
 var pos = shape.getAttribute("cx");
 if (pos > path.getTotalLength()) pos -= path.getTotalLength();
 var p = path.getPointAtLength(pos);
 shape.setAttribute("cx", p.x);
 shape.setAttribute("cy", p.y);
 pos += step;
 requestAnimationFrame(animate);
}

animate();
