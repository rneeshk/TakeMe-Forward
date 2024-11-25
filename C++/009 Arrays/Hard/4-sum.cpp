#include<bits/stdc++.h>
using namespace std;

vector<vector<int>> foursum(vector<int> nums, int target){
    int n = nums.size();
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    if(n < 4) return ans;
    for(int i=0;i<n;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(int j=i+1;j<n;j++){
            if(j != i + 1 && nums[j] == nums[j-1]) continue;
            int k = j + 1, l = n - 1;
            while(k < l){
                long long sum = nums[i];
                sum += nums[j];
                sum += nums[k];
                sum += nums[l];

                if(sum == target){
                    vector<int> temp = {nums[i], nums[j], nums[k], nums[l]};
                    ans.push_back(temp);
                    k++, l--;
                    while(k < l && nums[k] == nums[k-1]) k++;
                    while(k < l && nums[l] == nums[l+1]) l--;
                }else if(sum < target) k++;
                else l--;
            }
        }
    }
    return ans;
}
int main()
{
    vector<int> nums = {5,5,4,4,4,3,3,3,2,2,2,1,1,1};
    int target = 8;
    vector<vector<int>> res = foursum(nums, target);
    for(const auto &it: res){
        for(auto value: it){
            cout<<value<<" ";
        }
        cout<<endl;
    }
    return 0;
}