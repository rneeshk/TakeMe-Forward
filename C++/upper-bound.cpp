#include<bits/stdc++.h>
using namespace std;

int main()
{
    /*
        upper_bound function

    */
    int a[]={1,4,5,6,9,9};
    int n = 6;
    int x = upper_bound(a, a+n, 4) - a;
    int y = upper_bound(a, a+n, 7) - a;
    int z = upper_bound(a, a+n, 10) - a;

    cout<<x<<endl;
    cout<<y<<endl;
    cout<<z<<endl;

    vector<int> v = {1,4,5,6,9,9};
    int n1 = v.size();
    int x1 = 11;
    int ind = upper_bound(v.begin(), v.end(), x1) - v.begin();

    cout<<ind<<endl;
    return 0;
}