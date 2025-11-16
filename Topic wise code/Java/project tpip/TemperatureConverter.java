import java.util.Scanner;

public class TemperatureConverter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Select conversion type:");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        int choice = scanner.nextInt();

        System.out.print("Enter temperature value: ");
        double temperature = scanner.nextDouble();

        double convertedTemperature = 0.0;

        switch (choice) {
            case 1: // Celsius to Fahrenheit
                convertedTemperature = (temperature * 9/5) + 32;
                break;
            case 2: // Fahrenheit to Celsius
                convertedTemperature = (temperature - 32) * 5/9;
                break;
            default:
                System.out.println("Invalid choice.");
                System.exit(0); 
        }

        System.out.println("Converted Temperature: " + convertedTemperature);

        scanner.close();
    }
}