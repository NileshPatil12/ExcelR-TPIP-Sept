
import java.util.Scanner;
class Vehicle {
    private String model;
    private String registrationNumber;
    private double rentalRatePerDay;

    public Vehicle(String model, String registrationNumber, double rentalRatePerDay) {
        this.model = model;
        this.registrationNumber = registrationNumber;
        this.rentalRatePerDay = rentalRatePerDay;
    }

    public String getModel() {
        return model;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public double getRentalRatePerDay() {
        return rentalRatePerDay;
    }

    public double calculateRentalCost(int rentalDays) {
        return rentalRatePerDay * rentalDays;
    }
}

class Car extends Vehicle {
    private String color;

    public Car(String model, String registrationNumber, double rentalRatePerDay, String color) {
        super(model, registrationNumber, rentalRatePerDay);
        this.color = color;
    }

    public String getColor() {
        return color;
    }
}

class Motorcycle extends Vehicle {
    private String engineType;

    public Motorcycle(String model, String registrationNumber, double rentalRatePerDay, String engineType) {
        super(model, registrationNumber, rentalRatePerDay);
        this.engineType = engineType;
    }

    public String getEngineType() {
        return engineType;
    }
}


public class RentalSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for Car
        System.out.println("Enter details for the Car:");
        System.out.print("Model: ");
        String carModel = scanner.nextLine();
        System.out.print("Registration Number: ");
        String carRegistrationNumber = scanner.nextLine();
        System.out.print("Rental Rate Per Day: ");
        double carRentalRate = scanner.nextDouble();
        scanner.nextLine(); 
        System.out.print("Color: ");
        String carColor = scanner.nextLine();

        // Input for Motorcycle
        System.out.println("\nEnter details for the Motorcycle:");
        System.out.print("Model: ");
        String motorcycleModel = scanner.nextLine();
        System.out.print("Registration Number: ");
        String motorcycleRegistrationNumber = scanner.nextLine();
        System.out.print("Rental Rate Per Day: ");
        double motorcycleRentalRate = scanner.nextDouble();
        scanner.nextLine(); 
        System.out.print("Engine Type: ");
        String motorcycleEngineType = scanner.nextLine();

        // Input for rental days
        System.out.print("\nEnter the number of rental days: ");
        int rentalDays = scanner.nextInt();

        // Create objects
        Car car = new Car(carModel, carRegistrationNumber, carRentalRate, carColor);
        Motorcycle motorcycle = new Motorcycle(motorcycleModel, motorcycleRegistrationNumber, motorcycleRentalRate, motorcycleEngineType);

        // Display rental costs
        System.out.println("\n--- Rental Summary ---");
        System.out.println("Car Details: ");
        System.out.println("Model: " + car.getModel());
        System.out.println("Registration Number: " + car.getRegistrationNumber());
        System.out.println("Color: " + car.getColor());
        System.out.println("Rental Cost for " + rentalDays + " days: $" + car.calculateRentalCost(rentalDays));

        System.out.println("\nMotorcycle Details: ");
        System.out.println("Model: " + motorcycle.getModel());
        System.out.println("Registration Number: " + motorcycle.getRegistrationNumber());
        System.out.println("Engine Type: " + motorcycle.getEngineType());
        System.out.println("Rental Cost for " + rentalDays + " days: Rs." + motorcycle.calculateRentalCost(rentalDays));
    }
}
