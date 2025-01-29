package Important_Collections;

import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        // ArrayList
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Orange");

        // Common List Methods for ArrayList
        System.out.println("ArrayList: " + arrayList);
        System.out.println("ArrayList size: " + arrayList.size());
        System.out.println("ArrayList contains 'Banana': " + arrayList.contains("Banana"));
        System.out.println("ArrayList get(1): " + arrayList.get(1)); // Access by index
        System.out.println("ArrayList remove 'Apple': " + arrayList.remove("Apple"));
        System.out.println("ArrayList after removal: " + arrayList);
        arrayList.clear();
        System.out.println("ArrayList after clear: " + arrayList);

        // LinkedList
        List<String> linkedList = new LinkedList<>();
        linkedList.add("One");
        linkedList.add("Two");
        linkedList.add("Three");

        // Common List Methods for LinkedList
        System.out.println("LinkedList: " + linkedList);
        linkedList.addFirst("Zero"); // Adding at the start
        linkedList.addLast("Four"); // Adding at the end
        System.out.println("LinkedList after additions: " + linkedList);
        System.out.println("LinkedList removeFirst: " + linkedList.removeFirst()); // Removes first element
        System.out.println("LinkedList removeLast: " + linkedList.removeLast()); // Removes last element
        System.out.println("LinkedList after removals: " + linkedList);
    }
}
