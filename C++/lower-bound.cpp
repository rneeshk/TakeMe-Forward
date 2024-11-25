#include<bits/stdc++.h>
using namespace std;

int main()
{
    /*
        lower_bound function

    */
    int a[]={1,4,5,6,9,9};
    int n = 6;
    int x = lower_bound(a, a+n, 4) - a;
    int y = lower_bound(a, a+n, 7) - a;
    int z = lower_bound(a, a+n, 10) - a;

    cout<<x<<endl;
    cout<<y<<endl;
    cout<<z<<endl;

    vector<int> v = {1,4,5,6,9,9};
    int n1 = v.size();
    int x1 = 10;
    int ind = lower_bound(v.begin(), v.end(), x1) - v.begin();

    if(ind < n1 && v[ind] < x1){
        cout<<"Element not found. Index is out of bounds." <<endl;
    }else{
        cout << "The index of the first element not less than " << x1 << " is " << ind <<endl;
    }
    return 0;
}