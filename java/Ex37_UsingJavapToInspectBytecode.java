public class Ex37_UsingJavapToInspectBytecode {
    static int square(int number) {
        return number * number;
    }

    public static void main(String[] args) {
        System.out.println(square(5));
        System.out.println("Compile: javac Ex37_UsingJavapToInspectBytecode.java");
        System.out.println("Inspect: javap -c Ex37_UsingJavapToInspectBytecode");
    }
}
