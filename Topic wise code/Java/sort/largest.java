public class largest {
    public static void main(String[] args) {
        int arr[]={7,9,14,3,2,25,32,16,4};
        int no1=arr[0];
        int no2=arr[0];
        for (int i = 1; i < arr.length; i++) {
            if(no1<arr[i]){
                no1=arr[i];
            }
        }
        for (int i = 1; i < arr.length; i++) {
            if(no1!=arr[i] && no2<arr[i]){
                no2=arr[i];
            }
        }
        System.out.println("Largest number "+no1);
        System.out.println("Second number "+no2);
    }
}
