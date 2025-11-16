public class Student {
    private String name;
    private int rollNumber;
    private int marks;
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public static void main(String[] args) {
        
        Student student = new Student();

        student.setName("Nilesh Patil");
        student.setRollNumber(123);
        student.setMarks(90);

        String name = student.getName();
        int rollNumber = student.getRollNumber();
        int marks = student.getMarks();

        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}