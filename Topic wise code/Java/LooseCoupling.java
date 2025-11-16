interface engine{
	void startEngine();
}

class petrolEngine implements engine{
		public void startEngine(){
			System.out.println("Petrol Engine started");
		}
}

class dieselEngine implements engine{
		public void startEngine(){
			System.out.println("diesel Engine started");
		}
}

class electricEngine implements engine{
		public void startEngine(){
			System.out.println("Electric Engine started");
		}
}

class Vehicle{
	engine obj;
	public Vehicle(engine obj){
		this.obj=obj;
	}
	public void startVehicle(){
		System.out.println("Vehicle started");
	}
}
public class LooseCoupling{
		public static void main(String[] args){
			petrolEngine petrol=new petrolEngine();
			Vehicle vh=new Vehicle(petrol);
			vh.startVehicle();
			vh.obj.startEngine();
			
			System.out.println();
			
			electricEngine elec=new electricEngine();
			Vehicle v=new Vehicle(elec);
			v.startVehicle();
			v.obj.startEngine();
			
			System.out.println();
			
			dieselEngine diesel=new dieselEngine();
			Vehicle h=new Vehicle(diesel);
			h.startVehicle();
			h.obj.startEngine();
		}
}	