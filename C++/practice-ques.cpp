#include<bits/stdc++.h>
using namespace std;

void lowerBound(int arr[], int n, int x){
    /*
        Q1. Find the first occurence of a X in a
        sorted array. If it does not exists, print -1.
    */ 
    int ind = lower_bound(arr, arr+n, x) - arr;
    if(ind != n && arr[ind] == x) cout<<ind;
    else cout<<-1;
}

void upperBound(int arr[], int n, int x){
    /*
        Q2. Find the last occurrence of X in a
        sorted array. If it does not exist, print -1.
    */

    int ind = upper_bound(arr, arr+n, x) - arr;
    ind--;
    if(ind >= 0 && arr[ind] == x) cout << ind;
    else cout << -1;
}

void largestNumSmallerThanX(int arr[], int n, int x){
    /*
        Find the largest number which is smaller than X
        in a sorted array. If no number exists print -1.
    */
    int ind = lower_bound(arr, arr+n, x) - arr;
    ind--;
    if(ind >=0) cout<< arr[ind];
    else cout<<-1;
} 

void smallestNumGreaterThanX(int arr[], int n, int x){
    /*
        Find the smallest number which is greater than X
        in a sorted array. If no number exists print -1.
    */
    int ind = upper_bound(arr, arr+n, x) - arr;
    if(ind < n) cout<< arr[ind];
    else cout<< -1;
}
int main() {
    int arr[] = {1, 4, 4, 4, 4, 9, 9, 10, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    int x = 4;
    
    lowerBound(arr, n, x);
    cout << endl;
    upperBound(arr, n, x);
    cout<<endl;
    largestNumSmallerThanX(arr, n, x);
    cout<<endl;
    smallestNumGreaterThanX(arr, n, x);
    return 0;
}