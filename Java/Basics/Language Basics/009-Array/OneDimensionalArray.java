package Day006_Array;

public class OneDimensionalArray {

	public static void main(String[] args) {
		
		// A 1D array is a simple list of elements of the same type.
		
		int[] numbers = {1, 2, 3, 4, 5};
		
		// Accessing single element
		
		int singleElement = numbers[3];
		
		// print that element
		
		System.out.println("Element is: "+ singleElement);
		
		// Print all data
		
		System.out.println("Printing all elements");
		
		for(int element: numbers) {
			System.out.print(element + " ");
		}
		

	}

}
