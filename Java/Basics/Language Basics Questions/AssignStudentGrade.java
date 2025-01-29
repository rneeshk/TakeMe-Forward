/*
    Given marks of a student, print on the screen:

    Grade A if marks >= 90
    Grade B if marks >= 70
    Grade C if marks >= 50
    Grade D if marks >= 35
    Fail, otherwise.

    Examples:
    Input: marks = 95
    Output: Grade A
    Explanation: marks are greater than or equal to 90.

*/

import java.util.Scanner;

public class AssignStudentGrade{
    
    public static void studentGrade(int marks) {
        if(marks >= 90) System.out.println( "Grade A");
        else if(marks >= 70) System.out.println("Grade B") ;
        else if(marks >= 50) System.out.println("Grade C");
        else if(marks >= 35) System.out.println("Grade D");
        else System.out.println("Fail");
    }
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int marks = sc.nextInt();
        studentGrade(marks);
        sc.close();
    }
}