import java.util.Scanner;

public class libraryFine {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the expected return day: ");
        int expectedDay = scanner.nextInt();
        System.out.print("Enter the expected return month: ");
        int expectedMonth = scanner.nextInt();
        System.out.print("Enter the expected return year: ");
        int expectedYear = scanner.nextInt();

        System.out.print("Enter the actual return day: ");
        int actualDay = scanner.nextInt();
        System.out.print("Enter the actual return month: ");
        int actualMonth = scanner.nextInt();
        System.out.print("Enter the actual return year: ");
        int actualYear = scanner.nextInt();

        int fine = 0;

        // Check for late return by year
        if (actualYear > expectedYear) {
            fine = 10000; 
        } 
        // Check for late return by month within the same year
        else if (actualYear == expectedYear && actualMonth > expectedMonth) {
            fine = 500 * (actualMonth - expectedMonth);
        } 
        // Check for late return by day within the same month and year
        else if (actualYear == expectedYear && actualMonth == expectedMonth && actualDay > expectedDay) {
            fine = 15 * (actualDay - expectedDay);
        }

        // Print the calculated fine
        System.out.println("Fine: " + fine);

        scanner.close();
    }
}