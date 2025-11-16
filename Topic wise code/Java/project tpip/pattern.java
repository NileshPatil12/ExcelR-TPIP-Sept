public class pattern {
    public static void main(String[] args) {
        for(int i=1;i<5;i++){
            for(int j=1;j<=i;j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
        System.out.println();
        
        int k=1;
        for(int i=1;i<6;i++){
            for(int j=1;j<=i;j++){
                System.out.print(k++ + " ");
            }
            System.out.println();
        }
    }
}
