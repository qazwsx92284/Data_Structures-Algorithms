public class Factorial {
    
    public static void main(String[] args) {
        System.out.println(factorial_using_loop(8));
        System.out.println(factorial_using_recursion(8));
    }

    public static long factorial_using_loop(int num) {
        long result=1;
        if(num<0)
            return -1;
        while(num>0) {
            result *= num;
            num--;
        }
        return result;
    }

    public static long factorial_using_recursion(int num) {
        if(num != 0)
            return num * factorial_using_loop(num-1);
        else
            return 1;
    }
    
}
