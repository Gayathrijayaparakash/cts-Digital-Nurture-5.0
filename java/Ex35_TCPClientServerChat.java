import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Ex35_TCPClientServerChat {
    static void runServer() throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(5000);
             Socket socket = serverSocket.accept();
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
            out.println("Connected to server. Type messages from client.");
            String message;
            while ((message = in.readLine()) != null) {
                System.out.println("Client: " + message);
                out.println("Server received: " + message);
            }
        }
    }

    static void runClient() throws Exception {
        try (Socket socket = new Socket("localhost", 5000);
             BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
            System.out.println(in.readLine());
            String message;
            while ((message = keyboard.readLine()) != null) {
                out.println(message);
                System.out.println(in.readLine());
            }
        }
    }

    public static void main(String[] args) throws Exception {
        if (args.length > 0 && args[0].equalsIgnoreCase("server")) {
            runServer();
        } else {
            runClient();
        }
    }
}
