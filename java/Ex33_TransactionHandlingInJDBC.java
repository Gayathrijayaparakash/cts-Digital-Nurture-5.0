import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class Ex33_TransactionHandlingInJDBC {
    static void transfer(Connection connection, int fromId, int toId, double amount) throws Exception {
        connection.setAutoCommit(false);
        try (PreparedStatement debit = connection.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
             PreparedStatement credit = connection.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
            debit.setDouble(1, amount);
            debit.setInt(2, fromId);
            debit.executeUpdate();

            credit.setDouble(1, amount);
            credit.setInt(2, toId);
            credit.executeUpdate();

            connection.commit();
            System.out.println("Transfer successful.");
        } catch (Exception e) {
            connection.rollback();
            throw e;
        } finally {
            connection.setAutoCommit(true);
        }
    }

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection("jdbc:sqlite:bank.db");
             Statement statement = connection.createStatement()) {
            statement.executeUpdate("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, balance REAL)");
            statement.executeUpdate("INSERT OR IGNORE INTO accounts (id, balance) VALUES (1, 1000), (2, 500)");
            transfer(connection, 1, 2, 100);
        } catch (Exception e) {
            System.out.println("Transaction failed: " + e.getMessage());
        }
    }
}
