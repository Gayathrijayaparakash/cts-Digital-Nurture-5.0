public class Ex17_ClassAndObjectCreation {
    static class Car {
        String make;
        String model;
        int year;

        Car(String make, String model, int year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        void displayDetails() {
            System.out.println(year + " " + make + " " + model);
        }
    }

    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Corolla", 2022);
        Car car2 = new Car("Honda", "City", 2023);
        car1.displayDetails();
        car2.displayDetails();
    }
}
