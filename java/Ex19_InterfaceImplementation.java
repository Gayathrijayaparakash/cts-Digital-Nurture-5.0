public class Ex19_InterfaceImplementation {
    interface Playable {
        void play();
    }

    static class Guitar implements Playable {
        public void play() {
            System.out.println("Guitar is playing.");
        }
    }

    static class Piano implements Playable {
        public void play() {
            System.out.println("Piano is playing.");
        }
    }

    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();
        guitar.play();
        piano.play();
    }
}
