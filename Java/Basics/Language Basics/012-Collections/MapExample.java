package Important_Collections;

import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        // HashMap
        Map<String, String> hashMap = new HashMap<>();
        hashMap.put("1", "Apple");
        hashMap.put("2", "Banana");
        hashMap.put("3", "Orange");

        // Common Map Methods for HashMap
        System.out.println("HashMap: " + hashMap);
        System.out.println("HashMap get(1): " + hashMap.get("1"));
        System.out.println("HashMap containsKey('2'): " + hashMap.containsKey("2"));
        System.out.println("HashMap remove('2'): " + hashMap.remove("2"));
        System.out.println("HashMap after removal: " + hashMap);

        // LinkedHashMap (Maintains Insertion Order)
        Map<String, String> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put("A", "Apple");
        linkedHashMap.put("B", "Banana");
        System.out.println("LinkedHashMap: " + linkedHashMap);

        // TreeMap (Sorted by Key)
        Map<String, String> treeMap = new TreeMap<>();
        treeMap.put("Z", "Zebra");
        treeMap.put("A", "Apple");
        treeMap.put("M", "Mango");
        System.out.println("TreeMap (Sorted): " + treeMap);
    }
}

