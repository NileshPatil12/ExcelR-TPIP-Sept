class shape{
    shape(){
    System.out.println("shape");
    }
}

class circle extends shape{
    int r;
    circle(int r){
        this.r=r;
        System.out.print("circle area is ");
        System.out.println(3.14 * r * r);
    }
}

class rectangle extends shape{
    rectangle(int l,int b){
    System.out.println("rectangle area is "+(l*b));
    }
}

class polygon extends shape{
    polygon(){
    System.out.println("polygon");
    }
}
class cylinder extends shape{
    cylinder(){
    System.out.println("cylinder");
    }
}
class hexagon extends shape{
    hexagon(){
    System.out.println("hexagon");
    }
}

class inherit{
    public static void main(String[] args){
        circle c1=new circle(5);
        rectangle r1=new rectangle(5,4);
    }
}