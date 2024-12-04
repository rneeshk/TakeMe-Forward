#include <bits/stdc++.h>
using namespace std;

void pattern7(int n) {
    for(int i = 1; i <= n; i++){
        for(int space = 1; space <= n - i; space++){
            cout << " ";
        }
        for(int j = 1; j <= 2 * i - 1; j++){
            cout << "*";
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
        pattern7(n);
    }
    return 0;
}