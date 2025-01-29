package Important_Collections;

import java.util.*;

public class SetExample {
    public static void main(String[] args) {
        // HashSet
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");
        hashSet.add("Apple");  // Duplicate, won't be added

        // Common Set Methods for HashSet
        System.out.println("HashSet: " + hashSet);
        System.out.println("HashSet contains 'Banana': " + hashSet.contains("Banana"));
        System.out.println("HashSet remove 'Banana': " + hashSet.remove("Banana"));
        System.out.println("HashSet after removal: " + hashSet);

        // LinkedHashSet
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("X");
        linkedHashSet.add("Y");
        System.out.println("LinkedHashSet (Insertion Order): " + linkedHashSet);

        // TreeSet (Sorted Set)
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Pineapple");
        treeSet.add("Apple");
        treeSet.add("Mango");
        System.out.println("TreeSet (Sorted): " + treeSet);
    }
}
