#include<bits/stdc++.h>
using namespace std;

void pattern9(int n) {
    for(int i = 1; i <= 2 * n; i++){
        int space = 0, stars = 0;
        if(i <= n) stars = 2 * i - 1, space = n - i;
        else stars = 4 * n - 2 * i + 1, space = i - n - 1;
        for (int j = 1; j <= space; j++) {
            cout << " ";
        }
        for (int k = 1; k <= stars; k++) {
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
        pattern9(n);
    }
    return 0;
}