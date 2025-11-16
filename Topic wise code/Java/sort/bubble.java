class shape{
    int size;
    shape(int size){
        this.size=size;
    }
}
class circle extends shape{
    int radius;
    circle(int r,int size){
        super(size);
        this.radius=r;
    }
}


class bubble{

    
    public static void main(String[] args){
        String a="00124";
        boolean flag=false;
        for(int i=0;i<a.length();i++){
            if(a.charAt(i)!='0'){
                System.out.print(a.charAt(i));
                flag=true;
            }
            else if(flag){
                System.out.print(a.charAt(i));
            }
            else{
                continue;
            }
        }
    }
}