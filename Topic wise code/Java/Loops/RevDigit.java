public class RevDigit {
    public static void main(String[] args){
        int num=123;
        System.out.print(num+" reversed");
        int rev=0;
        do{
            rev = rev*10 + num%10;
            num=num/10;
        }while(num>0);
        System.out.println(" "+rev);
    }
}
