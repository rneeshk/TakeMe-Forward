#include<bits/stdc++.h>
using namespace std;

void pattern14(int n) {
    for(int i = 1; i <= n; i++){
        for(char j = 'A'; j <= 'A' - 1 + i; j++){
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
        pattern14(n);
    }
    return 0;
}