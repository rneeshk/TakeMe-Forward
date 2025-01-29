/*
    Given a string s. Return the last character of the given string s.

    Examples:
    Input : s = "takeuforward"
    Output : d
    Explanation : The last character of given string is "d".
    
*/

public class PrintLastCharacter {
    
    public static char lastChar(String s) {
        return s.charAt(s.length() - 1);
    }

    public static void main(String[] args) {
        String str = "Hello";
        System.out.println("The last character is: " + lastChar(str));
    }
}
