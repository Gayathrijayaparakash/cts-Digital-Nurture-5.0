import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Ex41_ExecutorServiceAndCallable {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Callable<Integer>> tasks = new ArrayList<>();

        for (int i = 1; i <= 5; i++) {
            int number = i;
            tasks.add(() -> number * number);
        }

        List<Future<Integer>> results = executor.invokeAll(tasks);
        for (Future<Integer> result : results) {
            System.out.println(result.get());
        }
        executor.shutdown();
    }
}
