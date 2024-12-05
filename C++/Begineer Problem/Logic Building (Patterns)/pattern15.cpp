#include<bits/stdc++.h>
using namespace std;

void pattern15(int n) {
    for(int i = 1; i <= n; i++){
        for(char j = 'A'; j <= 'A' + n - i; j++){
            cout << j;
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
        pattern15(n);
    }
    return 0;
}