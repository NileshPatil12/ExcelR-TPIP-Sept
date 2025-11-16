
import java.util.*;
import java.io.Console;
import java.lang.reflect.Method;
class Employee{
    int salary;
    int id;
    String name;

    Employee(int s,int id,String name){
        this.salary=s;
        this.id=id;
        this.name=name;
    }
     public int hashcode(){
        int name=this.hashCode();
        System.out.println(name);
        System.out.println(id);
        System.out.println(salary);
        return name+id+salary;
     }
}
public class emplyoe {
    public static boolean isPrime(int num){
        if(num<=1){
            return false;
        }
        for(int i=2;i<Math.sqrt(num);i++){
            if(num%i==0) return false;
        }
        return true;
    }
    public static void main(String[] args){
        Employee obj=new Employee(100, 30, "NIlesh");
        int ans=obj.hashcode();
        System.out.println(ans);
        int ar[]={11,22,33,44,55};
        for (int i : ar) {
            System.out.print(i+" ");
            System.out.println(isPrime(i));
        }
    }
}
