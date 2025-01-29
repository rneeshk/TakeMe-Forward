package Day006_Array;

public class TwoDimentionalArray {

	public static void main(String[] args) {
		
		int arr[][] = new int[3][2];
		
		// Approach 1
		arr[0][0] = 100;
		arr[0][1] = 200;
		arr[1][0] = 300;
		arr[1][1] = 400;
		arr[2][0] = 500;
		arr[2][1] = 600;
		
		int arr1[][] = {
				{100,200},
				{300,400},
				{500,600}
		};
		
		// Find size of an array
		System.out.println(arr1.length);
		System.out.println(arr1[0].length);
		
		for(int i = 0; i < arr1.length; i++) {
			for(int j = 0; j < arr1[i].length; j++) {
				System.out.println(arr1[i][j]);
			}
		}
		
		// Using for each loop
		for(int i[] : arr1) {
			for(int j : i ) {
				System.out.println(j);
			}
		}
	}

}
