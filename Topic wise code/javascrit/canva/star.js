function draw() {
  var x = document.getElementById("c1");
  c1 = x.getContext("2d");
  c1.fillStyle = "green";
  c1.beginPath();
  c1.moveTo(50, 50);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.lineTo(100, 100);

  c1.closePath();
  c1.stroke();
}
window.addEventListener("load", draw);
