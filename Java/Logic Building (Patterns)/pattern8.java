import java.util.Scanner;

public class pattern8 {
    public static void pattern8(int n){
        for(int i = 1; i <= n; i++){
            for(int space = 1; space <= i - 1; space++){
                System.out.print(" ");
            }
            for(int j = 1; j <= 2 * n - 2 * i + 1; j++){
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
            pattern8(n);
        }
    }
}
