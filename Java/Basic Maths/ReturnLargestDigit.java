/*
    You are given an integer n. Return the largest digit present in the number.

    Examples:
    Input: n = 25
    Output: 5
    Explanation: The largest digit in 25 is 5.
*/

public class ReturnLargestDigit {
    
    public static int largestDigit(int n) {
        if(n >= 0 && n < 9) return n;
        int temp = n;
        int ans = 0;
        while(temp != 0){
            int digit = temp % 10;
            if(digit > ans){
                ans = digit;
            }
            temp = temp / 10;
        }
        return ans;
    }
    public static void main(String[] args) {
        
        int n = 25;
        int ans = largestDigit(n);
        System.out.println(ans);
    }
}
