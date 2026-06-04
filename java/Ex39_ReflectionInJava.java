import java.lang.reflect.Method;

public class Ex39_ReflectionInJava {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Ex39_ReflectionInJava");
        Object object = clazz.getDeclaredConstructor().newInstance();

        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("Method: " + method.getName());
        }

        Method greet = clazz.getDeclaredMethod("greet", String.class);
        greet.invoke(object, "Java");
    }
}
