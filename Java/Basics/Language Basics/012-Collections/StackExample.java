package Important_Collections;

import java.util.*;

public class StackExample {
    public static void main(String[] args) {
        // Stack
        Stack<String> stack = new Stack<>();
        stack.push("Item 1");
        stack.push("Item 2");
        stack.push("Item 3");
        System.out.println("Stack: " + stack);
        System.out.println("Stack pop(): " + stack.pop());
        System.out.println("Stack after pop: " + stack);

        // ArrayDeque as Stack
        Deque<String> dequeStack = new ArrayDeque<>();
        dequeStack.push("Item A");
        dequeStack.push("Item B");
        System.out.println("Deque as Stack: " + dequeStack);
    }
}

