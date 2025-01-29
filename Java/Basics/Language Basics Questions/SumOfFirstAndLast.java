/*
    Given an integer array nums, return the sum of the 1st and last element of the array.

    Input: nums = [2, 3, 4, 5, 6]
    Output: 8
    Explanation: 1st element = 2, last element = 6, sum = 2 + 6 = 8.
    
*/

public class SumOfFirstAndLast {
    
    public static int sumOfFirstAndLast(int[] nums) {
        return nums[0] + nums[nums.length - 1];
    }
    public static void main(String[] args) {
        
        int[] nums = {2, 3, 4, 5, 6};
        int ans = sumOfFirstAndLast(nums);

        System.out.println(ans);
    }
}
