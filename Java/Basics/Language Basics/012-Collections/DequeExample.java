package Important_Collections;

import java.util.*;

public class DequeExample {
    public static void main(String[] args) {
        // ArrayDeque
        Deque<String> arrayDeque = new ArrayDeque<>();
        arrayDeque.addFirst("A");
        arrayDeque.addLast("B");
        System.out.println("ArrayDeque: " + arrayDeque);

        // LinkedList (Deque implementation)
        Deque<String> linkedListDeque = new LinkedList<>();
        linkedListDeque.addFirst("First");
        linkedListDeque.addLast("Last");
        System.out.println("LinkedList Deque: " + linkedListDeque);
    }
}

