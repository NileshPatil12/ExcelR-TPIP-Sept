class GrandParent{
    void grandParentMethod(){
        System.out.println("grand Parent Method");
    }
}
class Parent extends GrandParent{
    void parentMethod(){
        System.out.println("Parent Method");
    }
}
class Child extends Parent{
    void childMethod(){
        System.out.println("Child Method");
    }
}
class multiLevel{
    public static void main(String[] args){
        Child obj = new Child();
        obj.grandParentMethod();
        obj.parentMethod();
        obj.childMethod();
    }
}