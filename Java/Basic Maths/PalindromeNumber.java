/*
    You are given an integer n. You need to check whether the number is a palindrome number or not. 
    Return true if it's a palindrome number, otherwise return false.
    A palindrome number is a number which reads the same both left to right and right to left.

    Examples:
    Input: n = 121
    Output: true
    Explanation: When read from left to right : 121.
    When read from right to left : 121.
    
*/

public class PalindromeNumber {

    public static boolean isPalindrome(int n) {
        if(n < 0) return false;
        if(n >= 0 && n < 9) return true;
        int temp = n;
        int ans = 0;
        while(temp != 0){
            int digit = temp % 10;
            ans = ans * 10 + digit;
            temp = temp / 10;
        }
        return ans == n;
    }
    public static void main(String[] args) {
        
        int n = 121;
        boolean ans = isPalindrome(n);
        System.out.println(ans);
    }
}
