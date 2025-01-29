package Day002_DataTypes;

public class typecasting {
	public static void main(String args[]) {
		
		int ch = 'a';
		System.out.println(ch);
		
		char num = 98;
		System.out.println(num);	
		
		// Implicit type - done by compiler (no loss of data)
		int n = 10;
		float fl = n;
		System.out.println(fl);
		
		// Explicit type - done by coder (lossing data)
		double fl1 = 10.7;
		int x = (int) fl1;
		System.out.println(x);
	}
}
