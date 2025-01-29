package day019.TypesOfExceptions.Unchecked;

public class ArithmeticExceptions {

	public static void main(String[] args) {
	        try {
	            int result = 10 / 0; // Division by zero
	        } catch (ArithmeticException e) {
	            System.out.println("ArithmeticException: " + e.getMessage());
	        }
	}
}
