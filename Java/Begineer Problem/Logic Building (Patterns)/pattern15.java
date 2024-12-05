import java.util.Scanner;

public class pattern15 {
    public static void pattern15(int n) {
        for(int i = 1; i <= n; i++){
            for(char j = 'A'; j <= 'A' + n - i; j++){
                System.out.print(j);
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern15(n);
        }
    }
}
