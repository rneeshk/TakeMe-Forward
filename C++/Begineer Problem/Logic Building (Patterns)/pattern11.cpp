#include<bits/stdc++.h>
using namespace std;

void pattern11(int n) {
        int print = 1;
        for(int i = 1; i <= n; i++){
            if(i % 2 == 0) print = 0;
            else print = 1;
            for(int j = 1; j <= i; j++){
                cout << print << " ";
                print = 1 - print;
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
        pattern11(n);
    }
    return 0;
}