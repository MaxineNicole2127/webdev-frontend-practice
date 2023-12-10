class Entity {
    constructor(name) {
        this.name = name;
        this.date = new Date().toDateString();
    } walk() {
        console.log(`${this.name} is walking`);
    } birthdate() {
        console.log(`${this.name} was created on ${this.date}`)
    }
}

class Robot extends Entity {
    constructor(name) {
        super(name);
        this.legs = 2;
    } walk() {
        console.log(`${this.name} is walking with ${this.legs} legs--brrrrt`);
    }
}

class Cat extends Entity {
    constructor(name) {
        super(name);
        this.legs = 4;
    } walk() {
        console.log(`${this.name} is walking with ${this.legs} legs--meow`);
    } growl() {
        return "Purrr~^^";
    }
}

const robot = new Robot("Boboyboy");
const cat = new Cat("Casper");
robot.walk();
cat.walk();

console.log(`${robot.name} was created on ${robot.date}.`);
console.log(`${cat.name} was created on ${cat.date}.`);

console.log(`${cat.name} says "${cat.growl()}"`);
