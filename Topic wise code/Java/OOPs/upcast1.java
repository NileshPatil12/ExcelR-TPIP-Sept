class parent{
     void m1(){
        System.out.println("parent");
    }
}
class child extends parent{
     void m1(){
        System.out.println("child");
    }
}
class upcast1{
    public static void main(String[] args){
        parent p1=new parent();
        p1.m1();
        child c1=new child();
        c1.m1();
        parent p2=c1;
        p2.m1();
        child c2=(child)p2;
        c2.m1();
    }
}

// different op
// class parent{
//     static void m1(){
//         System.out.println("parent");
//     }
// }
// class child extends parent{
//     static void m1(){
//         System.out.println("child");
//     }
// }
// class upcast1{
//     public static void main(String[] args){
//         parent p1=new parent();
//         p1.m1();
//         child c1=new child();
//         c1.m1();
//         parent p2=c1;
//         p2.m1();
//         child c2=(child)p2;
//         c2.m1();
//     }
// }