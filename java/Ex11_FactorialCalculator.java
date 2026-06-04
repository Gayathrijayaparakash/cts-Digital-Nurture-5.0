import java.util.Scanner;

public class Ex11_FactorialCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a non-negative integer: ");
        int number = scanner.nextInt();
        long factorial = 1;

        if (number < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
            return;
        }

        for (int i = 2; i <= number; i++) {
            factorial *= i;
        }
        System.out.println("Factorial: " + factorial);
    }
}
