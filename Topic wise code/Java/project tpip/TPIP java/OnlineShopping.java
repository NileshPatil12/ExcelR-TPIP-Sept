class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}

class Electronics extends Product {
    private String brand;

    public Electronics(String name, double price, String brand) {
        super(name, price);
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }
}

class Clothing extends Product {
    private String size;

    public Clothing(String name, double price, String size) {
        super(name, price);
        this.size = size;
    }

    public String getSize() {
        return size;
    }
}

class ShoppingCart {
    private Product[] items;
    private int itemCount;

    public ShoppingCart(int capacity) {
        items = new Product[capacity];
        itemCount = 0;
    }

    public void addItem(Product item) {
        if (itemCount < items.length) {
            items[itemCount] = item;
            itemCount++;
            System.out.println(item.getName() + " added to the cart.");
        } else {
            System.out.println("Cart is full! Cannot add " + item.getName());
        }
    }

    public void removeItem(String productName) {
        boolean found = false;
        for (int i = 0; i < itemCount; i++) {
            if (items[i].getName().equals(productName)) {
                found = true;
                System.out.println(items[i].getName() + " removed from the cart.");
                // Shift items to fill the gap
                for (int j = i; j < itemCount - 1; j++) {
                    items[j] = items[j + 1];
                }
                items[itemCount - 1] = null; // Clear the last element
                itemCount--;
                break;
            }
        }
        if (!found) {
            System.out.println(productName + " not found in the cart.");
        }
    }

    public double calculateTotal() {
        double total = 0.0;
        for (int i = 0; i < itemCount; i++) {
            total += items[i].getPrice();
        }
        return total;
    }

    public void displayCart() {
        if (itemCount == 0) {
            System.out.println("The cart is empty.");
        } else {
            System.out.println("Shopping Cart:");
            for (int i = 0; i < itemCount; i++) {
                System.out.println(items[i].getName() + " - $" + items[i].getPrice());
            }
            System.out.println("Total: $" + calculateTotal());
        }
    }
}

public class OnlineShopping {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart(5); // Create a cart with a capacity of 5 items

        // Add items
        Electronics phone = new Electronics("iPhone 14", 999.99, "Apple");
        Clothing shirt = new Clothing("T-Shirt", 29.99, "Large");

        cart.addItem(phone);
        cart.addItem(shirt);

        // Display cart
        cart.displayCart();

        // Remove an item
        cart.removeItem("iPhone 14");

        cart.displayCart();

        cart.removeItem("Laptop");
    }
}