import java.util.Scanner;

public class pattern18 {
    public static void pattern18(int n) {
        for(int i = 0; i < n; i++) {
            for(char ch = (char) (('A'+ n-1)-i); ch <= ('A'+ n-1); ch++){
                System.out.print(ch + " ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern18(n);
        }
    }
}
