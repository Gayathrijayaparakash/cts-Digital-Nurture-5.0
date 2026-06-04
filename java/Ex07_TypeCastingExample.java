public class Ex07_TypeCastingExample {
    public static void main(String[] args) {
        double decimalValue = 45.89;
        int intValue = (int) decimalValue;

        int wholeNumber = 25;
        double doubleValue = (double) wholeNumber;

        System.out.println("Double value: " + decimalValue);
        System.out.println("Double cast to int: " + intValue);
        System.out.println("Int value: " + wholeNumber);
        System.out.println("Int cast to double: " + doubleValue);
    }
}
