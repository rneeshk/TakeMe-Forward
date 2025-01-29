package day019.TypesOfErrors;

public class LogicalErrors {

	public static void main(String[] args) {
		int a = 10;
        int b = 0;
        int result = a / b;  // Division by zero is a logical error
        System.out.println("Result: " + result);
        
        // This code will throw an exception (ArithmeticException), which is a logical error in the program, as division by zero is not allowed.
	}

}
