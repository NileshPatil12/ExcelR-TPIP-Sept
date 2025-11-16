class StaticMethodDemo{
    private int data = 10; // Non-static variable

    public void nonStaticMethod() {
        System.out.println("Non-static method called.");
    }

    public static void staticMethod() {
        // Attempting to call nonStaticMethod() directly from staticMethod() will result in an error
        // nonStaticMethod(); // Error
    }

    public static void main(String[] args) {
        StaticMethodDemo obj = new StaticMethodDemo();
        obj.nonStaticMethod(); // Correct way to call non-static method through object
        staticMethod();
    }
}