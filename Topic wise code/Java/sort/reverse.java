import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class reverse {
    public static void main(String[] args){
        Integer[] ans={1,2,3,3,4,4};
        Set<Integer> n=new HashSet<>(Arrays.asList(ans));
        System.out.println(n);
        
        
        int[] arr={1,2,3,4,5};
        int j=arr.length-1;
        int i=0;
        while(i<j){
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
        for(int k:arr){
            System.out.println(k);
        }
    }
}
