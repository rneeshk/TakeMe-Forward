package Day004_ContionalStatements;

public class continueStatement {
    public static void main(String[] args) {
        for(int i = 1; i <= 10; i++){
            if(i == 6){
                continue;
            }
            System.out.print(i + " ");
        }

        System.out.println();

        for(int i = 1; i <= 10; i++){
            if(i == 3 || i == 5 || i == 7){
                continue;
            }
            System.out.print(i + " ");
        }
    }
}
