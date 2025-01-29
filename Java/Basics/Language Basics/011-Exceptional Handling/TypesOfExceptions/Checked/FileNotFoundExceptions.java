package day019.TypesOfExceptions.Checked;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class FileNotFoundExceptions {

	public static void main(String[] args) {
		try {
            FileInputStream file = new FileInputStream("abc.txt");
        } catch (FileNotFoundException e) {
            System.out.println("FileNotFoundException: " + e.getMessage());
        }
	}
}
