class Explicit{
	public static void main(String[] args){
		double a=11.23;
		long b=12;
		float c=1.2f;
		double d=111111222222l;
		System.out.println("Conversion from double to int");
		System.out.println((int)a);
		System.out.println("Conversion from large double to int ");
		System.out.println((int)d);
		System.out.println("Conversion from long to byte");
		System.out.println((byte)b);
		System.out.println("Conversion from float to short");
		System.out.println((short)c);

	}
}