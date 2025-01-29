class MathConstants {

    // final keyword in class
    static final double PI = 3.14159;
    static final int MAX_VALUE = 100;
}

// final method of class
class Parent {
    final void show() { // Final method
        System.out.println("This is a final method in Parent class.");
    }
}

class Child extends Parent {
    // Trying to override will cause an error
    // void show() { System.out.println("Cannot override final method!"); }
}
public class finalKeyword{

    public static void main(String[] args) {

        // Inside the main method
        final int MAX_AGE = 100; // Constant integer
        final double PI = 3.14159; // Constant double

        System.out.println(MAX_AGE);
        System.out.println(PI);

        MathConstants mathcons = new MathConstants();
        System.out.println(mathcons.PI);
        System.out.println(mathcons.MAX_VALUE);
    }
}