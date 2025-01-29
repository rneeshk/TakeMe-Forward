package Day004_ContionalStatements;

import java.util.Scanner;

public class switchCase {
    public static void main(String[] args) {
        
        /*
            Given the day number print which day it is of the week,
            assume week starts from Monday and ends on Sunday
        */

        Scanner sc = new Scanner(System.in);
        int day = sc.nextInt();

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
                break;
        }
        sc.close();
    }
}
