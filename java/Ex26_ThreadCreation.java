public class Ex26_ThreadCreation {
    static class MessageTask implements Runnable {
        private final String message;

        MessageTask(String message) {
            this.message = message;
        }

        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println(message + " - " + i);
            }
        }
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new MessageTask("Thread 1"));
        Thread t2 = new Thread(new MessageTask("Thread 2"));
        t1.start();
        t2.start();
    }
}
