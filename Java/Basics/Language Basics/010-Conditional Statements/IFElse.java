package Day004_ContionalStatements;

import java.util.Scanner;

public class IFElse {
    public static void main(String[] args) {
        
        // Given an age, print "adult" if age >= 18, or print "Teen"

        Scanner scanner = new Scanner(System.in);
        int age = scanner.nextInt();
        if(age >= 18){
            System.out.println("Adult");
        }else{
            System.out.println("Teen");
        }


        /* 
            Given the marks of a student, tell us the grade he is getting
            following the below rules

            - Grade A (>=90)
            - Grade B (>=70 and < 90)
            - Grade C (>=50 and < 70)
            - Grade D (>=35 and < 50)
            - Fail (< 35)
        */
        int marks = scanner.nextInt();
        if(marks >= 90)System.out.println("A");
        else if(marks >= 70) System.out.println("B");
        else if(marks >= 50) System.out.println("C");
        else if(marks >= 35) System.out.println("D");
        else System.out.println("Fail");
        
        
        scanner.close();
    }
}
