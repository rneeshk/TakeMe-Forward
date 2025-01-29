/*
    Complete the function printNumber which takes an integer input from the user and prints it on the screen.
*/

import java.util.Scanner;

public class InputOutput {
    public void printNumber(Scanner sc) {
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        System.out.println("You entered: " + n);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 
        InputOutput obj = new InputOutput(); 
        obj.printNumber(sc);
        sc.close();
    }
}
