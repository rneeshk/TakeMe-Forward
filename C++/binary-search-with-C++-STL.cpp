#include<bits/stdc++.h>
using namespace std;

int main()
{
    /*
        Q1. Check if X exists in the sorted array or not
        a[] = {1,4,5,8,9}   

        use C++ STL binary_search() function using iterator

        binary_search(first_index, last_index, target-value)
    */
    int a[] = {1,4,5,8,9};
    int n = 5;

    /* 
        here:
                a -> first-element-index/iterator-begin
                a+n -> last-element-index/iterator-end
    */

    bool res = binary_search(a, a+n, 3);

    bool res2 = binary_search(a, a+n, 4);

    cout<<res<<" "<<res2<<endl;
    return 0;
}