package day019.TypesOfExceptions.Unchecked;

public class ClassCastExceptionExample {

	public static void main(String[] args) {
        Object obj = "Hello";
        try {
            Integer num = (Integer) obj; // Invalid casting
        } catch (ClassCastException e) {
            System.out.println("ClassCastException: " + e.getMessage());
        }
    }
}
