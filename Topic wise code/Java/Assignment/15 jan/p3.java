class p3{
    public int a=11;
    public void getA(){
        System.out.println(a);
    }
    public static void main(String[] args){
        // non-static variable a cannot be referenced from a static context
        // System.out.println("instance of "+a); 
        p3 obj=new p3();
        obj.getA();
    }
}