#include <bits/stdc++.h>
using namespace std;

vector<int> majorityElement(vector<int> &nums)
{
    int n = nums.size();
    vector<int> ans;
    for (int i = 0; i < n; i++){
        if (ans.size() == 0 || ans[0] != nums[i]){
            int cnt = 0;
            for (int j = 0; j < n; j++){
                if (nums[j] == nums[i]){
                    cnt++;
                }
            }
            if (cnt > n / 3){
                ans.push_back(nums[i]);
            }
        }
        if (ans.size() == 2){
            break;
        }
    }
    return ans;
}

vector<int> majorityElementBetter(vector<int> &nums){
    int n = nums.size();
    vector<int> ans;
    map<int, int> mpp;
    int mini = (n / 3) + 1;
    for(int i=0;i<n;i++){
        mpp[nums[i]]++;
        if(mpp[nums[i]] == mini){
            ans.push_back(nums[i]);
        }
    }
    return ans;
}

vector<int> majorityElementOptimal(vector<int> &nums){
    int n = nums.size();
    int cnt1= 0, el1, cnt2=0, el2;
    for(int i=0;i<n;i++){
        if(cnt1 == 0 && nums[i] != el2){
            cnt1 = 1, el1 = nums[i];
        }
        else if(cnt2 == 0 && nums[i] != el1){
            cnt2 = 1, el2 = nums[i];
        }
        else if(el1 == nums[i]) cnt1++;
        else if(el2 == nums[i]) cnt2++;
        else{
            cnt1--, cnt2--;
        }
    }
    vector<int> ans;
    cnt1=0, cnt2=0;
    for(int i=0;i<n;i++){
        if(el1 == nums[i]) cnt1++;
        if(el2 == nums[i]) cnt2++;
    }
    int mini = (int)(n/3) + 1;
    if(cnt1 >= mini) ans.push_back(el1);
    if(cnt2 >= mini) ans.push_back(el2);
    return ans;
}
int main()
{
    vector<int> nums = {1, 1, 1, 1, 3, 2, 2, 2};
    vector<int> res = majorityElementOptimal(nums);
    for (auto it : res)
    {
        cout << it << " ";
    }
    return 0;
}