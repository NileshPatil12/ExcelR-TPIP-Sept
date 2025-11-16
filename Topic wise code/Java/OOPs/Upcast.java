class Animal{
    void shout(){
        System.out.println("Animal ");
    }
}

class Dog extends Animal{
    void bark(){
        System.out.println("Dog is barking");
    }
}

class Upcast{
    public static void main(String[] args){
        Animal ani=new Dog();
        
        if(ani instanceof Dog){
            System.out.println("Instance of Dog");
            Dog dog=(Dog) ani;
            dog.bark();
        }
        else{
            System.out.println("Instance of animal");
        }
    }
}