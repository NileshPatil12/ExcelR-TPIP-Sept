function draw(){
    var x=document.getElementById("c1");
    c1=x.getContext("2d");
    c1.font="bold 70px Fantasy";
    c1.textAlign="learn Now Pay Later";
    let gra=c1.createLinearGradient(10,10,x.width,10);
    gra.addColorStop(0,"blue");
    gra.addColorStop(0.5,"purple");
    gra.addColorStop(1,"red");
    c1.fillStyle=gra;
    c1.fillText("Learn Now, Pay Later",300,300);
}

window.addEventListener("load",draw);