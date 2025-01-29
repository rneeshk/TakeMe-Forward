package Day003_Operators;

public class ArithmeticOperators {

	public static void main(String[] args) {
		
		// Arithmetic Operator - +, -, *, /, %
		
		int num1 = 5;
		int num2 = 12;
		int num3 = num1 + num2;
		System.out.println(num3);
		
		// Unary Operator - +, -, ++, --, !
		// Multiplication of signs
		
		int num4 = -6;	
		int num5 = num4;
		System.out.println(num5);
		
		boolean b = true;
		boolean b1 = !b;
		System.out.println(b1);
		
		int c = 6;
		int d = c++;	// still 6, this need to be remember, post this operation I need to increment myself
		
		int e = 6;
		int f = ++e;	// before I do anything, I need to update and myself 7
		
		System.out.println("C is: " +c);
		System.out.println("D is: " +d);
		
		System.out.println("E is: " +e);
		System.out.println("F is: " +f);
		
		int g = 6;
		int h = g--;	// still 6, this need to be remember, post this operation I need to decrement myself
		
		int i = 6;
		int j = --i;	// before I do anything, I need to update and myself 7
		
		System.out.println("G is: " +g);
		System.out.println("H is: " +h);
		
		System.out.println("I is: " +i);
		System.out.println("J is: " +j);
	}

}
