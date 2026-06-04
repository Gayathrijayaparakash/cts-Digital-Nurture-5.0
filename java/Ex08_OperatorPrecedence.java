public class Ex08_OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 100 / 5 + 3 * 4 - 2;

        System.out.println("10 + 5 * 2 = " + result1);
        System.out.println("(10 + 5) * 2 = " + result2);
        System.out.println("100 / 5 + 3 * 4 - 2 = " + result3);
        System.out.println("Multiplication and division run before addition and subtraction.");
    }
}
