import java.util.Scanner;

public class pattern16 {
    public static void pattern16(int n) {
        for(int i = 1; i <= n; i++){
            char ch = (char) ('A' + i - 1);
            for(int j = 1; j <= i; j++){
                System.out.print(ch);
            }
            System.out.println();
        }
}
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern16(n);
        }
    }
}
