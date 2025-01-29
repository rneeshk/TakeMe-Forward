/*
    You are given an integer n. You need to return the number of digits in the number.
    The number will have no leading zeroes, except when the number is 0 itself.

    Examples:
    Input: n = 4
    Output: 1
    Explanation: There is only 1 digit in 4.
*/

public class CountDigits{

    public static int countDigit(int n) {
        int cnt = 0;
        if(n == 0) return 1;
        while(n != 0){
            cnt++;
            n = n / 10;
        }
        return cnt;
    }
    public static void main(String[] args) {
        
        int n = 14;
        int ans = countDigit(n);
        System.out.println(ans);
    }
}