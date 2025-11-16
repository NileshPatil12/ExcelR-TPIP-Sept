class reverseDigit{
    public static void main(String[] args){
        int num=1001;
        int pal=rev(num);
        if(num==pal){
            System.out.println(num+" is palindrome");
        }
        else{
            System.out.println(num+" is not a palindrome");
        }
    }
    public static int rev(int num){
        int sum=0;
        while(num>0){
            int temp=num%10;
            sum=(sum*10)+temp;
            num/=10;
        }
        return sum;
    }
}