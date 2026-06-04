public class Ex40_VirtualThreads {
    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();
        Thread[] threads = new Thread[100000];

        for (int i = 0; i < threads.length; i++) {
            int id = i;
            threads[i] = Thread.startVirtualThread(() -> {
                if (id < 10) {
                    System.out.println("Virtual thread " + id);
                }
            });
        }

        for (Thread thread : threads) {
            thread.join();
        }

        long end = System.currentTimeMillis();
        System.out.println("Completed in " + (end - start) + " ms");
    }
}
