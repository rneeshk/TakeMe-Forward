import java.util.Scanner;

public class pattern11 {
    public static void pattern11(int n) {
        int print = 1;
        for(int i = 1; i <= n; i++){
            if(i % 2 == 0) print = 0;
            else print = 1;
            for(int j = 1; j <= i; j++){
                System.out.print(print + " ");
                print = 1 - print;
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern11(n);
        }
    }
}
