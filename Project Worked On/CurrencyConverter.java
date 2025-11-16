import java.util.Scanner;

public class CurrencyConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
		// Conversion rates
		double usdRate = 0.012; // 1 INR = 0.012 USD
		double eurRate = 0.011; // 1 INR = 0.011 EUR
		double gbpRate = 0.0098; // 1 INR = 0.0098 GBP
		double jpyRate = 1.64;  // 1 INR = 1.64 JPY
		double audRate = 0.018; // 1 INR = 0.018 AUD
		double cadRate = 0.016; // 1 INR = 0.016 CAD
		double cnyRate = 0.088; // 1 INR = 0.088 CNY (Chinese Yuan)
		double krwRate = 15.05; // 1 INR = 15.05 KRW (Korean Won)

		System.out.println("Welcome to the Enhanced Currency Converter!");
		System.out.println("============================================");

		// Display the menu
		System.out.println("\nSelect the currency to convert from INR:");
		System.out.println("1. USD (US Dollar)");
		System.out.println("2. EUR (Euro)");
		System.out.println("3. GBP (British Pound)");
		System.out.println("4. JPY (Japanese Yen)");
		System.out.println("5. AUD (Australian Dollar)");
		System.out.println("6. CAD (Canadian Dollar)");
		System.out.println("7. CNY (Chinese Yuan)");
		System.out.println("8. KRW (Korean Won)");
		System.out.println("9. Exit");

		System.out.print("Enter your choice: ");
		int choice = scanner.nextInt();

		if (choice == 9) {
			System.out.println("Thank you for using the Currency Converter. Goodbye!");
			return;
		}

		System.out.print("Enter the amount in INR: ");
		double inrAmount = scanner.nextDouble();

		if (inrAmount < 0) {
			System.out.println("Invalid amount! Please enter a positive value.");
			return;
		}

		double convertedAmount = 0;
		String currency = "";

		// Perform conversion based on choice
		switch (choice) {
			case 1:
				convertedAmount = inrAmount * usdRate;
				currency = "USD";
				break;
			case 2:
				convertedAmount = inrAmount * eurRate;
				currency = "EUR";
				break;
			case 3:
				convertedAmount = inrAmount * gbpRate;
				currency = "GBP";
				break;
			case 4:
				convertedAmount = inrAmount * jpyRate;
				currency = "JPY";
				break;
			case 5:
				convertedAmount = inrAmount * audRate;
				currency = "AUD";
				break;
			case 6:
				convertedAmount = inrAmount * cadRate;
				currency = "CAD";
				break;
			case 7:
				convertedAmount = inrAmount * cnyRate;
				currency = "CNY";
				break;
			case 8:
				convertedAmount = inrAmount * krwRate;
				currency = "KRW";
				break;
			default:
				System.out.println("Invalid choice! Please select a valid currency.");
				return;
		}

		// Display the result
		System.out.printf(inrAmount+" in INR is equal to "+convertedAmount+" "+ currency);
    }
}
