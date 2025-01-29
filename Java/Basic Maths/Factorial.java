/*
    You are given an integer n. Return the value of n! or n factorial.
    Factorial of a number is the product of all positive integers less than or equal to that number.

    Examples:
    Input: n = 2
    Output: 2
    Explanation: 2! = 1 * 2 = 2.
*/

public class Factorial {

    public static int factorial(int n) {
        int temp = n;
        if(temp == 0) return 1;
        int fact = 1;
        for(int i = 1; i <= temp; i++){
            fact = fact * i;
        }
        return fact;
    }
    public static void main(String[] args) {
        int n = 3;
        int ans = factorial(n);
        System.out.println(ans);
    }
}
