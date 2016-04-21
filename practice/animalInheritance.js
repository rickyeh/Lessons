'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Construct a Zoo to hold all the animals (compilation)
class Zoo {
  constructor() {
    this.animalList = {
      'cat': [],
      'dog': [],
      'elephant': [],
      'pig': [],
      'snake': [],
      'bird': [] 
    };
  }

  showZoo() {
    return this.animalList;
  }

  addAnimal(animal) {
    this.animalList[animal.type].push(animal);
    console.log(animal.type + ' added to the zoo.');
  }

  getAnimal(type, index) {
    return this.animalList[type][index];
  }
}

let myZoo = new Zoo();

// Constructor functions for all types of animals
class Animal {
  constructor(type, name) {
    this.type = type || 'animal';
    this.age = 0;
    this.name = name || 'JohnDoe';
  }

  grow() {
    this.age++;
    return (this.type + ' is now ' + this.age + ' years old.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super('dog', name);
  }

  bark() {
    return (this.name + ' the ' + this.type + ' barks.');
  }
}

class Cat extends Animal {
  constructor(name) {
    super('cat', name);
  }
  meow() {
    return (this.name + ' the ' + this.type + ' meows.');
  }
}

class Pig extends Animal {
  constructor(name) {
    super('pig', name);
  }

  oink() {
    return (this.name + ' the ' + this.type + ' oinks.');
  }
}

class Elephant extends Animal {
  constructor(name) {
    super('elephant', name);
  }

  blow() {
    return (this.name + ' the ' + this.type + ' blows.');
  }
}

class Snake extends Animal {
  constructor(name) {
    super('snake', name);
  }

  spit() {
    return (this.name + ' the ' + this.type + ' spits venom.');
  }
}

class Bird extends Animal {
  constructor(name) {
    super('bird', name);
  }

  fly() {
    return (this.name + ' the ' + this.type + ' flies in the air.');
  }
}

// Instantiate 6 animals for testing
myZoo.addAnimal(new Dog('Pluto'));
myZoo.addAnimal(new Cat('Garfield'));
myZoo.addAnimal(new Pig('Porky'));
myZoo.addAnimal(new Elephant('Dumbo'));
myZoo.addAnimal(new Bird('Toucan Sam'));
myZoo.addAnimal(new Snake('Solid'));

// API ROUTES
app.get('/zoo', function(req, res) {
  res.status(200).send(myZoo.showZoo());
});

app.post('/:type/new', function(req, res) {
  let newAnimal;
  switch (req.params.type) {
    case 'dog':
      newAnimal = new Dog(req.params.type, req.body.name);
      break;
    case 'cat':
      newAnimal = new Cat(req.params.type, req.body.name);
      break;
    case 'pig':
      newAnimal = new Pig(req.params.type, req.body.name);
      break;
    case 'elephant':
      newAnimal = new Elephant(req.params.type, req.body.name);
      break;
    case 'bird':
      newAnimal = new Bird(req.params.type, req.body.name);
      break;
    case 'snake':
      newAnimal = new Snake(req.params.type, req.body.name);
      break;
  }
  myZoo.addAnimal(newAnimal);
})

app.get('/:type/:id/:action', function(req, res) {
  res.status(200).send(myZoo.getAnimal(req.params.type, req.params.id)[req.params.action]());
})


console.log('App is listening on 4568');
app.listen(4568);