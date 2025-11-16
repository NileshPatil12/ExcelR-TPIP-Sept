class Factorial{
    public static void main(String[] args){
        fact(3);
    }
    public static void fact(int num){
        int ans=1;
        for(int i=1;i<=num;i++){
            ans=ans*i;
        }
        System.out.println(num+" factorial is "+ans);
    }
}