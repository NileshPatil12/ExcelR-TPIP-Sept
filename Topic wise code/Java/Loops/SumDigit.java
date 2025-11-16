import java.util.*;
public class SumDigit{
    public static void main(String[] args){
        int num=123;
        int sum=0;
        do {
            sum=sum+num%10;
            num=num/10;
        } while (num>0);
        System.out.println("Sum is "+sum);

}
}