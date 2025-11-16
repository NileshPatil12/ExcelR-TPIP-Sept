class Animal{
    void sound(){
        System.out.println("Animal CLass");
    }

}
class Dog extends Animal{
    void sound(){
        System.out.println("Dog class");
    }
}

class singleInheritance{
    public static void main(String[] args){
        Dog obj=new Dog();
        obj.sound();
    }
}