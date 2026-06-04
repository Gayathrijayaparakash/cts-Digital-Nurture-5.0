import java.util.List;

public class Ex29_Records {
    record Person(String name, int age) {}

    public static void main(String[] args) {
        List<Person> people = List.of(
                new Person("Anu", 17),
                new Person("Ravi", 22),
                new Person("Meera", 19)
        );

        people.forEach(System.out::println);
        System.out.println("Adults:");
        people.stream()
                .filter(person -> person.age() >= 18)
                .forEach(System.out::println);
    }
}
