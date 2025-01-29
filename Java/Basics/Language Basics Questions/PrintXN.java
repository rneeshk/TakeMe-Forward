/*
    Given two integers X and N, print the value X on the screen N times. Move to the next line after printing, even if N = 0.

    Examples:
    Input: X = 7, N = 5
    Output: 7 7 7 7 7
*/

public class PrintXN {
    
    public static void printX(int X, int N) {
        for(int i = 0; i < N; i++){
            System.out.print(X);
            if (i < N - 1) {
                System.out.print(" ");
            }
        }
        System.out.println();
    }
    public static void main(String[] args) {
        
        int X = 7;
        int N = 5;
        printX(X, N);
    }
}
