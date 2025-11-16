class Vehicle {
    void Engine() {
        System.out.println("Generic Vehicle Engine");
    }
	void add(int a,int b){
		System.out.println(a+b);
	}
	void add(double a,double b){
		System.out.println(a+b);
	}
}

class Bike extends Vehicle {
    @Override
    void Engine() {
        System.out.println("Bike Engine");
    }
}

class Car extends Vehicle {
    @Override
    void Engine() {
        System.out.println("Car Engine");
    }
}

class Demo1 {
    public static void main(String[] args) {
		//Compile time polymorphs
		Vehicle vh=new Vehicle();
		vh.add(2,5);
		vh.add(1.2,7.8);
		
		//Runtime Polymorphism
        Vehicle vehicle1 = new Vehicle();
        Vehicle vehicle2 = new Bike();
        Vehicle vehicle3 = new Car();

        vehicle1.Engine(); 
        vehicle2.Engine(); 
        vehicle3.Engine(); 
		
    }
}