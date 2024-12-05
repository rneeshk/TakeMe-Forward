#include<bits/stdc++.h>
using namespace std;

void pattern12(int n) {
    for(int i = 1; i <= n; i++){
        for(int j = 1; j <= i; j++){
            cout << j;
        }
        for(int space = 1; space <= 2 * n - 2 * i; space++){
            cout << " ";
        }
        for (int j = i; j >= 1; j--) {
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
        pattern12(n);
    }
    return 0;
}