public class ReverseNumber {
    
    public static int reverseNumber(int n) {
        int ans = 0;
        while(n != 0){
            int digit = n % 10;
            ans = ans * 10 + digit;
            n = n / 10;
        }
        return ans;
    }
    public static void main(String[] args) {
        
        int n = 123;
        int ans = reverseNumber(n);
        System.out.println(ans);
    }
}
