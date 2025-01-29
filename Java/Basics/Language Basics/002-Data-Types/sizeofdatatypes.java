package Day002_DataTypes;

public class sizeofdatatypes {

	public static void main(String[] args) {
		
		System.out.println("Size of byte: " + Byte.SIZE + " bits");
		System.out.println("Size of byte: " + (Byte.SIZE / 8) + " bytes");
		
		System.out.println("Size of short: " + Short.SIZE + " bits");
		System.out.println("Size of short: " + (Short.SIZE / 8) + " bytes");
		
		System.out.println("Size of int: " + Integer.SIZE + " bits");
		System.out.println("Size of int: " + (Integer.SIZE / 8) + " bytes");
		
		System.out.println("Size of long: " + Long.SIZE + " bits");
		System.out.println("Size of long: " + (Long.SIZE / 8) + " bytes");
		
		System.out.println("Size of float: " + Float.SIZE + " bits");
		System.out.println("Size of float: " + (Float.SIZE / 8) + " bytes");
		
		System.out.println("Size of double: " + Double.SIZE + " bits");
		System.out.println("Size of double: " + (Double.SIZE / 8) + " bytes");
		
		// String size is depends on the number of characters it contains and internal representations used by the JVM
		
		System.out.println("Size of char: " + Character.SIZE + " bits");
		System.out.println("Size of char: " + (Character.SIZE / 8) + " bytes");
		
		// Boolean size is always 1 bit - 0/1

	}

}
