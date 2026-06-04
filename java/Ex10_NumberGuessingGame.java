import java.util.Random;
import java.util.Scanner;

public class Ex10_NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int secretNumber = new Random().nextInt(100) + 1;
        int guess;

        do {
            System.out.print("Guess a number between 1 and 100: ");
            guess = scanner.nextInt();
            if (guess < secretNumber) {
                System.out.println("Too low.");
            } else if (guess > secretNumber) {
                System.out.println("Too high.");
            } else {
                System.out.println("Correct!");
            }
        } while (guess != secretNumber);
    }
}
