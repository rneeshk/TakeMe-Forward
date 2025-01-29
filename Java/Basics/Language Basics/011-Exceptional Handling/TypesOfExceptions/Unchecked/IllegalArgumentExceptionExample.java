package day019.TypesOfExceptions.Unchecked;

public class IllegalArgumentExceptionExample {

	public static void main(String[] args) {
        try {
            Thread.sleep(-1000); // Negative sleep time is illegal
        } catch (IllegalArgumentException | InterruptedException e) {
            System.out.println("IllegalArgumentException: " + e.getMessage());
        }
    }
}
