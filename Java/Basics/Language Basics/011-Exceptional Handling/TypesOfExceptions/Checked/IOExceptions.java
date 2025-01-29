package day019.TypesOfExceptions.Checked;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class IOExceptions {

	public static void main(String[] args) {
		try {
			FileReader file = new FileReader("abc.txt");
			BufferedReader fileInput = new BufferedReader(file);
            fileInput.readLine();
            fileInput.close();
		}catch (IOException e) {
            System.out.println("An IOException occurred: " + e.getMessage());
        }
		
	}

}
