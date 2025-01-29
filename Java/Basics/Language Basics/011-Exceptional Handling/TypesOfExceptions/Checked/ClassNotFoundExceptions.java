package day019.TypesOfExceptions.Checked;

public class ClassNotFoundExceptions {

	public static void main(String[] args) {
		try {
            Class.forName("non_existent_class");
        } catch (ClassNotFoundException e) {
            System.out.println("ClassNotFoundException: " + e.getMessage());
        }
	}

}
