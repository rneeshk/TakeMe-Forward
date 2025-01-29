import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        // Create Scanner object
        Scanner sc = new Scanner(System.in);

        // Taking integer input
        System.out.print("Enter an integer: ");
        int num = sc.nextInt();

        // Taking double input
        System.out.print("Enter a decimal number: ");
        double decimal = sc.nextDouble();

        // Taking boolean input
        System.out.print("Enter true or false: ");
        boolean flag = sc.nextBoolean();

        // Taking single word input
        System.out.print("Enter a single word: ");
        String word = sc.next();

        // Taking full line input
        sc.nextLine(); // Consume the leftover newline character
        System.out.print("Enter a full sentence: ");
        String sentence = sc.nextLine();

        // Printing inputs
        System.out.println("\nYou entered:");
        System.out.println("Integer: " + num);
        System.out.println("Decimal: " + decimal);
        System.out.println("Boolean: " + flag);
        System.out.println("Word: " + word);
        System.out.println("Sentence: " + sentence);

        // Close the scanner to release memory
        sc.close();
    }
}
