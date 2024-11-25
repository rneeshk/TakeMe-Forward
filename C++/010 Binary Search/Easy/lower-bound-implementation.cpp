#include<bits/stdc++.h>
using namespace std;

int lowerBound(vector<int>& nums, int n, int x){
    int low = 0, high = n - 1;
    int ans = n;  // Initialize ans to n assuming x is greater than any element in nums

    while(low <= high){
        int mid = (low + high) / 2;  // Calculate middle index
        if(nums[mid] >= x){  // If nums[mid] is greater than or equal to x
            ans = mid;  // Update ans to mid (potential lower bound index)
            high = mid - 1;  // Move to the left half to find a smaller lower bound
        } else {
            low = mid + 1;  // Move to the right half
        }
    }

    return ans;  // Return the lower bound index
}
int main()
{
    vector<int> nums = {1,2,3,3,5,8,8,10,10,11};
    int n = nums.size();
    int x = 1;
    int result = lowerBound(nums, n, x);
    cout<<result<<endl;
    return 0;
}