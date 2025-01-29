package Day006_Array;

import java.util.Arrays;

public class ArrayClass {

	public static void main(String[] args) {
		
		 // Sample array
        int[] arr = {5, 2, 8, 3, 1, 4};

        // 1. sort() - Sorts the array in ascending order
        Arrays.sort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));

        // 2. binarySearch() - Searches for an element in the sorted array
        int index = Arrays.binarySearch(arr, 3);  // Searching for the element 3
        System.out.println("Index of 3: " + index);

        // 3. copyOf() - Copies the array to a new array with a specified length
        int[] newArray = Arrays.copyOf(arr, 8);  // Copying to an array of size 8
        System.out.println("Copied array with size 8: " + Arrays.toString(newArray));

        // 4. equals() - Compares two arrays for equality
        int[] arr2 = {1, 2, 3, 4, 5};
        boolean isEqual = Arrays.equals(arr, arr2);
        System.out.println("Arrays are equal: " + isEqual);

        // 5. fill() - Fills the array with a specific value
        Arrays.fill(arr, 10);  // Fill the array with 10
        System.out.println("Array after filling with 10: " + Arrays.toString(arr));

        // 6. toString() - Returns a string representation of the array
        System.out.println("Array as string: " + Arrays.toString(arr));

        // 7. asList() - Converts the array to a list
        Integer[] integerArray = {1, 2, 3, 4, 5};
        System.out.println("Array as list: " + Arrays.asList(integerArray));

        // 8. deepToString() - Returns a string representation of a multi-dimensional array
        int[][] multiDimArray = {{1, 2}, {3, 4}};
        System.out.println("Multi-dimensional array as string: " + Arrays.deepToString(multiDimArray));
        
	}
}
