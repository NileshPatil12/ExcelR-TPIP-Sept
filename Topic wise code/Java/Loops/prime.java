import java.util.Scanner;

public class prime {
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        System.out.println("Enter input num");
        int x = scn.nextInt();
        if (x <= 1) {
            System.out.println("Not a prime number");
            return;
        }
        int i = 2;
        boolean flag = false;
        do {
            if (x % i == 0) {
                flag = true;
                break;
            }
            i++;
        } while (i <= Math.sqrt(x));
        if (flag) {
            System.out.println("Not Prime Number");
        } else {
            System.out.println("Prime Number");
        }
    }
}
