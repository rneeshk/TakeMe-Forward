import java.util.Scanner;

public class pattern19 {
    public static void pattern19(int n) {
        int iniS = 0;
        for(int i=0; i< n; i++){
            for(int j = 1; j <= n-i; j++){
                System.out.print("*");
            }
            for(int j = 0; j <iniS; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= n-i; j++){
                System.out.print("*");
            }
            iniS+=2;
            System.out.println();
        }
        iniS = 2*n -2;
        
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            for(int j = 0; j <iniS; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            iniS-=2;
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        while(testCases-- > 0){
            int n = sc.nextInt();
            pattern19(n);
        }
    }
}
