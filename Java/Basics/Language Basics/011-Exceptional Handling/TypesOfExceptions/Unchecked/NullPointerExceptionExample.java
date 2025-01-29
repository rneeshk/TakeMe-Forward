package day019.TypesOfExceptions.Unchecked;

public class NullPointerExceptionExample {

	public static void main(String[] args) {
        String str = null;
        try {
            System.out.println(str.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("NullPointerException: " + e.getMessage());
        }
    }
}
