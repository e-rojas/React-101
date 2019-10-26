class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age}`;
  }
}
class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  //method

  getDescription() {
    let description = super.getDescription();
    if (this.location) {
      description += ` Their location is ${this.location}`;
    }
    return description;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  //methods
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}
const tom = new Person("Tom", 34);
const me = new Student("Edgar", 44, "Comp Scien");
const ted = new Traveler("Ted", 22, "New York");
console.log(tom.getDescription());
console.log(me.getDescription());
console.log(ted.getDescription());
