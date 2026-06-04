public class Ex34_CreateAndUseJavaModules {
    public static void main(String[] args) {
        System.out.println("Module example structure:");
        System.out.println("com.utils/module-info.java -> exports com.utils;");
        System.out.println("com.greetings/module-info.java -> requires com.utils;");
        System.out.println("Compile with: javac -d out --module-source-path src $(find src -name '*.java')");
        System.out.println("Run with: java --module-path out -m com.greetings/com.greetings.Main");
    }
}
