public class Ex30_PatternMatchingForSwitch {
    static String describe(Object value) {
        return switch (value) {
            case Integer i -> "Integer: " + i;
            case String s -> "String with length " + s.length();
            case Double d -> "Double: " + d;
            case null -> "Null value";
            default -> "Other type: " + value.getClass().getSimpleName();
        };
    }

    public static void main(String[] args) {
        System.out.println(describe(25));
        System.out.println(describe("Java"));
        System.out.println(describe(45.5));
        System.out.println(describe(true));
    }
}
