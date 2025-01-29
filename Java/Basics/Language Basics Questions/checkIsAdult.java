/* 
    Given an integer age, print on the screen:

    Adult if age >= 18
    Teen if age < 18
    Do not change the case of any letter in "Adult" and "Teen" while printing the answer.

    Examples:
    Input: age = 19
    Output: Adult
    Explanation: age is greater than or equal to 18.
    
*/

import java.util.Scanner;

public class checkIsAdult {

    public static void isAdult(int age) {
        if(age >= 18) System.out.println("Adult");
        else System.out.println("Teen");
    }
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        isAdult(age);

        sc.close();
    }
}
