/*
    You are given an integer n. You need to return the number of odd digits present in the number.
    The number will have no leading zeroes, except when the number is 0 itself.

    Examples:
    Input: n = 5
    Output: 1
    Explanation: 5 is an odd digit.
    
*/

public class CountOddDigits {

    public static int countOddDigit(int n) {
        int cnt = 0;
        while(n != 0){
            int digit = n % 10;
            if(digit % 2 != 0){
                cnt++;
            }
            n = n / 10;
        }
        return cnt;
    }
    public static void main(String[] args) {
        
        int n = 25;
        int ans = countOddDigit(n);
        System.out.println(ans);
    }
}
