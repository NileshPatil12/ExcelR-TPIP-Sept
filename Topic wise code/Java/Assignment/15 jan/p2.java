class p2{
    public static int objectCount = 0; // Static variable to count objects

    public p2() {
        objectCount++; // Increment object count in constructor
    }

    public static int getObjectCount() {
        return objectCount;
    }

    public static void main(String[] args) {
        p2 obj1 = new p2();
        p2 obj2 = new p2();

        System.out.println("Total objects created: " + getObjectCount());
    }
}