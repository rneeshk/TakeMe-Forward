package day008;

import java.util.Arrays;

public class Strings {

	public static void main(String[] args) {
		
		// String: Collection of characters
		// Predefined class and contains predefined methods
		
		String name = "Rajneesh";
		String name1 = new String("Rajneesh");
		
		System.out.println(name);
		System.out.println(name1);
		
		// length()
		System.out.println(name.length());
		
		// length vs length()
		// length : length is a keyword to find size of an array
		// length(): length is a method which return size of a string
		
		// concat()
		String str1 = "Hello";
		String str2 = "World";
		System.out.println(str1.concat(str2));
		
		// trim()
		String str3 = "          Hello          ";
		System.out.println("Before trimming " + str3 + " and length is: " + str3.length());
		str3 = str3.trim();
		System.out.println("After trimming " + str3 + " and length is: " + str3.length());
		
		// charAt() - return a character based on index
		System.out.println(str3.charAt(1));
		
		// contains() - return true or false
		System.out.println(str3.contains("Hell"));
		
		// equals() and equalsIgnoreCase()
		System.out.println(str1.equals(str2));
		System.out.println(str1.equalsIgnoreCase(str2));
		
		// replace - replace single character/sequence of characters in a string
		String str4 = "rajneesh";
		str4 = str4.replace('r', 'R');
		System.out.println(str4);
		str4 = str4.replace("Rajneesh", "Gucchu");
		System.out.println(str4);
		
		// substring() - extract substring from the main string
		String str5 = "Rajneesh Kumar";
		System.out.println(str5.substring(2, 5));
		
		// toUpperCase()
		System.out.println(str5.toUpperCase());
		System.out.println(str5.toLowerCase());
		
		// split() - split/divide the string into multiple parts based on delimeter, return an array of string
		String str6 = "$15,20,255";
		String data[] = str6.split(",");
		System.out.println(data[0]);
		System.out.println(data[1]);
		System.out.println(data[2]);
		System.out.println(str6.replace("$", "").replace(",", ""));
		
		String s = "abc,123@xyz";
		
		String arr[] = s.split(",");
		System.out.println(arr[0]);
		System.out.println(arr[1]);
		
		System.out.println(s.split(",")[0]);
		System.out.println(s.split(",")[1].split("@")[0]);
		System.out.println(s.split(",")[1].split("@")[1]);
		
		String s1 = "abc 123 xyz";
		String arr1[] = s1.split(" ");
		System.out.println(Arrays.toString(arr1));
	}

}
