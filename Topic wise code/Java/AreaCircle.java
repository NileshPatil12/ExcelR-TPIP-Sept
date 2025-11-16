class AreaCircle{
	public static void main(String[] args){
		double radius=5;
		double area=Math.PI*radius*radius;
		double cir=2*Math.PI*radius;
		System.out.print("Area of Circle : ");
		System.out.print(area+" ");
		System.out.println((int)area);
		System.out.print("Circumference : ");
		
		System.out.print(cir+" ");
		System.out.println((int)cir);
	}
}