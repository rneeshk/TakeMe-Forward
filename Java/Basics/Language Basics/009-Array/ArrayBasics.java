package Day006_Array;

public class ArrayBasics {

	public static void main(String[] args) {
		
		// Static Initialization
		
		int[] numbers = {1,2,3,4,5};
		
		// Dynamic Initialization
		
		int[] array = new int[5];
		array[0] = 1;
		array[1] = 2;
		
		// Accessing Single Data in an Array
		
		int firstNumber = numbers[0];
		System.out.println("First element is array: " + firstNumber);
		
		// Accessing all data using loops
		
		// 1. Using for loop
		
		System.out.println("Accessing all data using for loop");
		for(int i = 0; i <numbers.length; i++) {
			System.out.print(numbers[i] + " ");
		}
		
		System.out.println();
		
		// 2. Using For-Each Loop:
		System.out.println("Accessing all data using for-each loop");
		for (int num : numbers) {
		    System.out.print(num + " ");
		}
	}

}
