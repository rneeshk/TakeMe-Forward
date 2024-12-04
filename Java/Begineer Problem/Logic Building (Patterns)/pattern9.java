import java.util.Scanner;

public class pattern9 {
    public static void pattern9(int n){
        for(int i = 1; i <= 2 * n; i++){
            int space = 0, stars = 0;
            if(i <= n) {
                stars = 2 * i - 1;
                space = n - i;
            }
            else{
                stars = 4 * n - 2 * i + 1;
                space = i - n - 1;
            }
            for (int j = 1; j <= space; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= stars; k++) {
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
            pattern9(n);
        }
    }
}
