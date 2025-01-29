package Day004_ContionalStatements;

public class whileLoop {
    public static void main(String[] args) {
        
        // Multiple of 2 till 50

        int i = 2;
        while(i <= 50){
            System.out.print(i + " ");
            i += 2;
        }
        System.out.println();


        // even number
        int j = 1;
        while(j <= 10){
            if(j % 2 == 0){
                System.out.print(j + " ");
            }
            j++;
        }
        System.out.println();

        // odd number
        int k = 1;
        while(k <= 10){
            if(k % 2 != 0){
                System.out.print(k + " ");
            }
            k++;
        }
        System.out.println();

        // reverse counting

        int a = 10;
        while(a >= 1){
            System.out.print(a + " ");
            a--;
        }
        System.out.println();
    }
}
