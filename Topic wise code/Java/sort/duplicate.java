class duplicate {
    public static int lenNum(int num){
        int count=0;
        while(num!=0){
            num=num/10;
            count++;
        }
        return count;
    }
    
    public static void isArmstrong(int num){
        int n=lenNum(num);
        System.out.println(n);
        int temp=0;
        int x=num;
        while(x!=0){
            int p=(x%10);
            int ans=p;
            x=x/10;
            for(int i=1;i<n;i++){
                ans*=p;
            }
            temp+=ans;
        }
        System.out.println(temp);
        if(temp==num){
            System.out.println("Armstrong Number");
        }
        else{
            System.out.println("Not Armstrong Number");
        }
    }    
    public static void main(String[] args) {
        if(args.length>0){
            int num=Integer.parseInt(args[0]);
             isArmstrong(num);
        }
        else{
            System.out.println("No command line arguments");
        }
    }
}