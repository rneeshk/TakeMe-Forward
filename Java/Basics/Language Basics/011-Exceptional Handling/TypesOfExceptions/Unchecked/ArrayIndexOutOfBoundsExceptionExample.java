package day019.TypesOfExceptions.Unchecked;

public class ArrayIndexOutOfBoundsExceptionExample {

	public static void main(String[] args) {
        int[] arr = new int[5];
        try {
            System.out.println(arr[10]); // Accessing invalid index
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
        }
    }

}
