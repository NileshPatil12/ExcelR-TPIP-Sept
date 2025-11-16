function draw(){
    x=document.getElementById("c1");
    c1=x.getContext('2d');
    var pic=new Image();
    pic.src="image.jpg"
    pic.addEventListener("load",function(){
        c1.drawImage(pic,0,0,500,500)
    })
}
window.addEventListener("load",draw);