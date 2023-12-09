function getDate()
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

class Entity
{
    constructor (name)
    {
        this.name = name;
        this.date = getDate();
    }

    walk()
    {
        console.log(`${this.name} is walking.`);
    }

    birthDate()
    {
        console.log(`${this.name} was created on ${this.date}`);
    }
}

class Robot extends Entity
{
    constructor (name)
    {
        super(name);
        this.legs = 2;
    }

    walk()
    {
        console.log(`${this.name} is walking with ${this.legs} legs--brrrrt”`);
    }
}

class Cat extends Entity
{
    constructor (name)
    {
        super(name);
        this.legs = 4;
    }

    walk()
    {
        console.log(`${this.name} is walking with ${this.legs} legs--meow`)
    }

    growl()
    {
        console.log(`Purrrr~^^`);
    }
}

var robot = new Robot("Robot Gab");
var cat = new Cat("Karma");

robot.walk();
cat.walk();
robot.birthDate();
cat.birthDate();
cat.growl();