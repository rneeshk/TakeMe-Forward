#include<bits/stdc++.h>
using namespace std;

void pattern10(int n) {
    for(int i = 1; i <= 2 * n - 1; i++){
        int stars = 0;
        if(i <= n) stars = i;
        else stars = 2 * n - i;
        for(int j = 1; j <= stars; j++){
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
        pattern10(n);
    }
    return 0;
}