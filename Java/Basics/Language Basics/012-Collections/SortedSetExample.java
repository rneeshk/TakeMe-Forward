package Important_Collections;

import java.util.*;

public class SortedSetExample {
    public static void main(String[] args) {
        // TreeSet (Sorted Set)
        SortedSet<String> treeSet = new TreeSet<>();
        treeSet.add("Banana");
        treeSet.add("Apple");
        treeSet.add("Cherry");

        System.out.println("SortedSet (TreeSet): " + treeSet);
        System.out.println("First element: " + treeSet.first());
        System.out.println("Last element: " + treeSet.last());
    }
}
