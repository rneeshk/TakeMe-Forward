#include<bits/stdc++.h>
using namespace std;

void pattern13(int n) {
    int count = 1;
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout << count << " ";
            count++;
        }
        cout << endl;
    }
}
int main()
{
    int testCases;
    cin >> testCases;
    while (testCases--){
        int n;
        cin >> n;
        pattern13(n);
    }
    return 0;
}