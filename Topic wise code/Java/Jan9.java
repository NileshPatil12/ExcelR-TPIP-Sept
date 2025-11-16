import java.util.Scanner;

public class Jan9 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. Finding the Greater Number
        System.out.print("Enter two numbers: ");
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();

        if (num1 > num2) {
            System.out.println("The greater number is: " + num1);
        } else if (num1 < num2) {
            System.out.println("The greater number is: " + num2);
        } else {
            System.out.println("Both numbers are equal.");
        }

        // 2. Grade-Based Message
        System.out.print("Enter your grade: ");
        char grade = scanner.next().charAt(0);

        if (grade == 'A' || grade == 'a') {
            System.out.println("Excellent!");
        } else if (grade == 'B' || grade == 'b') {
            System.out.println("Very good!");
        } else if (grade == 'C' || grade == 'c') {
            System.out.println("Good.");
        } else if (grade == 'D' || grade == 'd') {
            System.out.println("Pass.");
        } else if (grade == 'F' || grade == 'f') {
            System.out.println("Fail.");
        } else {
            System.out.println("Invalid grade.");
        }

        scanner.close();
    }
}