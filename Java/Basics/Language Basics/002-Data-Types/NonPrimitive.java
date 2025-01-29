package Day002_DataTypes;

import java.util.ArrayList;
import java.util.HashMap;

class Person{
	String name;
	int age;
	
	// Constructor
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	// Getter methods
	public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class NonPrimitive {

	public static void main(String[] args) {
		
		// String: A sequence of characters (reference type).
		String str = "Hello";
		
		// Array: Stores multiple values of the same type.
		int[] numbers = {1,2,3,4,5};
		
		// Class (Person): Defines an object with properties and methods.
		Person person = new Person("Rajneesh", 24);
		
		// ArrayList: A resizable array from Java’s Collection framework.
		ArrayList<String> names = new ArrayList<>();
		names.add("Rajneesh");
		names.add("Garima");
		
		// HashMap: Stores key-value pairs.
		HashMap<String, Integer> marks = new HashMap<>();
		marks.put("Math", 90);
		marks.put("Science", 85);

// By creating Heterogeneous data in an object array, but not in normal array. For that we use ArrayList
		Object obj[] = new Object[5];
		obj[0] = 100;
		obj[1] = "Rajneesh";
		obj[2] = 'A';
		obj[3] = true;
		obj[4] = 10.5;
		
		System.out.println(Arrays.toString(obj));
		for(Object ele: obj) {
			System.out.println(ele);
		}
		
		 // Printing values
        System.out.println("String: " + str);
        System.out.println("Array: " + java.util.Arrays.toString(numbers));
        System.out.println("Person Object: " + person.getName() + ", Age: " + person.getAge());
        System.out.println("ArrayList: " + names);
        System.out.println("HashMap: " + marks);

	}

}
