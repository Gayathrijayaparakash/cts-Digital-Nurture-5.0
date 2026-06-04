import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Ex27_LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>(List.of("Ravi", "Amit", "Sneha", "Kiran"));
        Collections.sort(names, (a, b) -> a.compareToIgnoreCase(b));
        System.out.println(names);
    }
}
