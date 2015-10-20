function Person(name, age, height, weight, sex) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
    this.jump = function() {
        console.log(this.name + ' jumps up in the air!');
    };
}

var rick = new Person('Rick', 29, 69, 160, 'm');

Person.prototype.sayHello = function() {
    console.log(this.name + ' says Hello!');
};

Person.prototype.eat = function() {
    console.log(this.name + ' eats.');
};

function Animal() {}  // Define an animal class

Animal.prototype.eat = function() {
    console.log('Eating...');
};

Animal.prototype.sleep = function() {
    console.log('Sleeping...');
};

function Dog() {
    Animal.call(this);
}

function Cat() {
    Animal.call(this);
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

Dog.prototype.bark = function() {
    console.log('Woof woof!');
};

Cat.prototype.meow = function() {
    console.log('Meow');
};

var garfield = new Cat();
var lucky = new Dog();
// lucky.bark();
// lucky.eat();
// lucky.sleep();

// garfield.eat();
// garfield.meow();

var person1 = {
    name: 'Jim',
    age: 7,
    hair: 'brown'
};

var person2 = {
    name: 'Bill',
    age: 10,
    hair: 'black'
};

function sayHello(msg) {
    console.log(this.name + ' says hello! ' + msg );
}

sayHello.call(person1, 'I am awesome');

// Function declarations
function helloWorld() {
    console.log('Hello');
}

var whatFcn = function() {
    console.log('What?!');
};

// Object declarations
var myObject = {};

function MyObj1(name, age) {
    this.name = name;
    this.age = age;
}

MyObj1.prototype.sleep = function() {
    console.log('Sleeps...');
};

