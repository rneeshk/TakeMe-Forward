package Day002_DataTypes;

public class PrimitiveDatatypes {

	public static void main(String[] args) {
		
		// // Integer types
		byte byteVar  = 55;		//max 2 number
		short shortVar  = 10000;	//max 5 number
		int intVar = 500000000;	// max 9 number (-10^9 to 10^9)
		long longVar = 5555555555555555444l; 		//max 9 number (-10^18 to 10^18)
		
		// Floating-point types
		float floatVar =3.14f;			// max 7 decimal precision
		double doubleVar = 3.14159265359;	// max 15 decimal precision
		
		// Character type
		char charVar = 'M';
		
		// Boolean type
		boolean boolVar = true;		// true or false
		
		System.out.println(byteVar);
		System.out.println(shortVar);
		System.out.println(intVar);
		System.out.println(longVar);
		System.out.println(floatVar);
		System.out.println(doubleVar);
		System.out.println(charVar);
		System.out.println(boolVar);
	}
}
