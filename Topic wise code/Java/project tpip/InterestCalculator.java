import java.util.Scanner;

public class InterestCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Select interest type:");
        System.out.println("1. Simple Interest");
        System.out.println("2. Compound Interest");
        int choice = scanner.nextInt();

        System.out.print("Enter principal amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter rate of interest: ");
        double rate = scanner.nextDouble();

        System.out.print("Enter time period (in years): ");
        double time = scanner.nextDouble();

        double interest = 0.0;

        switch (choice) {
            case 1: // Simple Interest
                interest = (principal * rate * time) / 100;
                break;
            case 2: // Compound Interest
                interest = principal * Math.pow(1 + (rate / 100), time) - principal;
                break;
            default:
                System.out.println("Invalid choice.");
                System.exit(0); 
        }

        System.out.println("Interest: " + interest);
        System.out.println("Total Amount: " + (principal+interest));

        scanner.close();
    }
}