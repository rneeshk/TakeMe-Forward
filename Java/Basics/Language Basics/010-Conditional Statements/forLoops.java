package Day004_ContionalStatements;

import java.util.Scanner;

public class forLoops {
    public static void main(String[] args) {

        // for
        for(int i = 1; i <= 5; i++){
            System.out.print(i + " ");
        }
        System.out.println();

        // Enter elements in the array, then add them up
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] arr = new int[size];

        // taking input
        for(int j = 0; j < size; j++){
            arr[j] = sc.nextInt();
        }
        // print sum of all elements
        int sum = 0;
        for(int j = 0; j < size; j++){
            sum += arr[j];
        }
        System.out.println("Sum is "+sum);

        // using for each loop
        for(int ele: arr){
            sum += ele;
        }
        System.out.println("Sum is "+sum);
        sc.close();
    }
}
