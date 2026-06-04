import java.util.HashMap;
import java.util.Scanner;

public class Ex25_HashMapExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashMap<Integer, String> students = new HashMap<>();

        System.out.print("How many students? ");
        int count = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < count; i++) {
            System.out.print("Enter ID: ");
            int id = scanner.nextInt();
            scanner.nextLine();
            System.out.print("Enter name: ");
            students.put(id, scanner.nextLine());
        }

        System.out.print("Enter ID to search: ");
        int id = scanner.nextInt();
        System.out.println("Name: " + students.getOrDefault(id, "Not found"));
    }
}
