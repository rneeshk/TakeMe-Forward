import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class bufferReader {

	public static void main(String[] args) {
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		try {
			System.out.println("Enter a number");
			String str = reader.readLine();		// reads a single line of input
			
			System.out.println(str.getClass().getName());
			System.out.println(str);
			
			int num = Integer.parseInt(str);
			System.out.println(((Object) num).getClass().getName());
			System.out.println(num);
			
		}catch(IOException e) {
			System.out.println("An error occured while reading input");
		}finally {
			try {
				// close the BufferedReader
				reader.close();
				
			}catch(IOException e) {
				e.printStackTrace();
			}
		}
	}
}

/*
 	Both Scanner and BufferedReader in Java are used to read input, but they have differences in terms of performance, functionality, and use cases. Here's a detailed comparison between the two:

1. Performance
		BufferedReader:
			BufferedReader is generally faster for reading large inputs, especially when reading multiple lines or large blocks of text, as it reads input in large chunks (buffered) instead of one byte/character at a time.
			It uses a buffer to store a chunk of data in memory, making it more efficient than Scanner for large amounts of input.
		Scanner:
			Scanner is typically slower than BufferedReader for reading large inputs because it reads input one token at a time and does additional processing (like parsing integers, floats, etc.).
			It is more flexible as it provides built-in methods for parsing different data types.
2. Ease of Use
		Scanner:
			Convenient for reading various types of data like integers, floating-point numbers, strings, etc., as it provides built-in methods like nextInt(), nextFloat(), nextLine(), etc.
			It's easier for simple applications where you need to read different data types from input (e.g., reading a string, then an integer).
		BufferedReader:
			It reads input as plain text (strings) and requires additional conversion if you need other data types like integers or floats. For example, you'll need to manually convert a string to an int using Integer.parseInt().
			More appropriate when working with large or more complex input, especially when performance is a priority.
3. Input Handling
		Scanner:
			Can parse input and divide it into tokens using delimiters (by default, whitespace).
			Handles basic parsing automatically (e.g., nextInt() reads an integer and converts it for you).
			It is not ideal when you need to process a large stream of input because it performs additional processing.
		BufferedReader:
			Reads input line by line with the readLine() method, which is efficient for reading large chunks of text.
			It doesn't handle parsing or tokenization automatically. You have to convert the input data (e.g., Integer.parseInt() for integers).
4. Exception Handling
		Scanner:
			Throws InputMismatchException if the input does not match the expected type (e.g., trying to read an integer when the input is not an integer).
		BufferedReader:
			Throws IOException if there's an error during reading input, and you must handle this explicitly.
5. Thread Safety
		Scanner:
			Scanner is not thread-safe, meaning if multiple threads access it simultaneously, you may run into problems unless you manage synchronization manually.
		BufferedReader:
			Like Scanner, BufferedReader is also not thread-safe. You need to manage synchronization in multithreaded environments.
6. Methods for Reading Input
		Scanner:
			Methods include:
			nextLine(): Reads a full line of text.
			next(): Reads a single word/token.
			nextInt(), nextFloat(), nextDouble(): Parses integers, floats, doubles, etc.
		BufferedReader:
			Main method: readLine(): Reads a full line of text as a String.
			No built-in parsing methods (e.g., for int or float); you need to manually convert the string.
7. Memory Usage
		BufferedReader:
			Since it uses a buffer, BufferedReader uses more memory to store the input temporarily, which can be beneficial for reading large inputs efficiently.
		Scanner:
			Typically consumes less memory than BufferedReader as it reads the input more incrementally, but it may not be as efficient for large volumes of data.
8. Usage Context
		Scanner:
			Best used when you need to read user input interactively (e.g., reading integers, strings, and other types of input from the console).
			Useful for small to medium-sized input that involves different data types.
		BufferedReader:
			Best used for reading large amounts of text or files (e.g., when performance is critical).
			It's generally used for batch processing or when reading larger files where you don’t need to split or parse individual tokens.
 */