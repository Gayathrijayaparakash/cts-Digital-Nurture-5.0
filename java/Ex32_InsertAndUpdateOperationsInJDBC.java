import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

public class Ex32_InsertAndUpdateOperationsInJDBC {
    static class StudentDAO {
        private final Connection connection;

        StudentDAO(Connection connection) {
            this.connection = connection;
        }

        void insertStudent(int id, String name) throws Exception {
            String sql = "INSERT INTO students (id, name) VALUES (?, ?)";
            try (PreparedStatement ps = connection.prepareStatement(sql)) {
                ps.setInt(1, id);
                ps.setString(2, name);
                ps.executeUpdate();
            }
        }

        void updateStudent(int id, String name) throws Exception {
            String sql = "UPDATE students SET name = ? WHERE id = ?";
            try (PreparedStatement ps = connection.prepareStatement(sql)) {
                ps.setString(1, name);
                ps.setInt(2, id);
                ps.executeUpdate();
            }
        }
    }

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection("jdbc:sqlite:students.db");
             Statement statement = connection.createStatement()) {
            statement.executeUpdate("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT)");
            StudentDAO dao = new StudentDAO(connection);
            dao.insertStudent(2, "Neha");
            dao.updateStudent(2, "Neha Sharma");
            System.out.println("Insert and update complete.");
        } catch (Exception e) {
            System.out.println("JDBC error: " + e.getMessage());
        }
    }
}
