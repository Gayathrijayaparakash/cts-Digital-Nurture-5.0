import java.util.ArrayList;
import java.util.Scanner;

public class Ex24_ArrayListExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();

        while (true) {
            System.out.print("Enter student name or done: ");
            String name = scanner.nextLine();
            if (name.equalsIgnoreCase("done")) break;
            names.add(name);
        }

        System.out.println("Students: " + names);
    }
}
