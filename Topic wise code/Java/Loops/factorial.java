import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        System.out.println("Enter Number ");
        int n=scn.nextInt();
        int fact=1;
        System.out.print("factorial of "+n);
        while(n>0){
            fact=fact*n;
            n--;
        }
        System.out.println(" is "+fact);
    }
}
