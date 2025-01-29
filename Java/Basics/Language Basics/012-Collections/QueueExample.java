package Important_Collections;

import java.util.*;

public class QueueExample {
    public static void main(String[] args) {
        // LinkedList (Queue implementation)
        Queue<String> queue = new LinkedList<>();
        queue.offer("Step 1");
        queue.offer("Step 2");
        queue.offer("Step 3");

        // Common Queue Methods for LinkedList
        System.out.println("Queue: " + queue);
        System.out.println("Queue poll(): " + queue.poll()); // Retrieves and removes the head
        System.out.println("Queue after poll: " + queue);

        // PriorityQueue (Queue with Priority)
        Queue<String> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer("Low");
        priorityQueue.offer("High");
        priorityQueue.offer("Medium");
        System.out.println("PriorityQueue (Priority): " + priorityQueue);
    }
}
