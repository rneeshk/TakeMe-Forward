import java.util.Scanner;

public class pattern7 {
    public static void pattern7(int n){
        for(int i = 1; i <= n; i++){
            for(int space = 1; space <= n - i; space++){
                System.out.print(" ");
            }
            for(int j = 1; j <= 2 * i - 1; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern7(n);
        }
    }
}
