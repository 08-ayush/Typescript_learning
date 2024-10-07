"use strict";
//classes and objects
//class definition
//constructor
//access modifiers (public, private, protected)
//Readonly properties
//optional properties
//parameter properties
//getter and setter
//static properties and methods
//abstract classes and methods
//1 class and object
// class Bottle{
//     radius=120;
//     height=100;
//     color= "white";
// }
// let b1=new Bottle();
class BottleMaker {
    constructor(name, price, color, material) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.material = material;
        if (!color) {
            this.color = "transparent";
        }
    }
}
let b1 = new BottleMaker("milton", 968, "", "metal");
let b2 = new BottleMaker("cello", 1000, "red", "plastic");
b1.material = "glass";
class Music {
    constructor(name, artist, duration, free) {
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.free = free;
    }
}
let m1 = new Music("song1", "artist1", "4:00", "yes");
// access modifiers
//public readonly the value of the property cannot be changed
class bottleMaker {
    constructor(name) {
        this.name = name;
        this.nam = "cello";
    }
}
class MetalBottle extends bottleMaker {
    constructor(name) {
        super(name);
        this.name = name;
    }
    getValue() {
        console.log(this.name, this.nam);
    }
}
let t1 = new MetalBottle("milton");
t1.getValue();
//getter and setter
//!without getter and setter
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(val) {
        this.name = val;
    }
}
let u1 = new User("John", 23);
//with getter and setter
class _User {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
let u2 = new _User("Johni", 23);
u2.name = "Aayush";
//functions
function abcdr(name, age, cb) {
    console.log(name, age);
    cb("hello");
}
abcdr("John", 23, (arg) => {
    console.log("callback");
    console.log(arg);
});
function overloading(a, b) {
    if (typeof a === "string" && typeof b === "undefined") {
        console.log(a);
        return; // Add return here to stop further execution
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123; // Return the value to match the overload signature
    }
    throw new Error("Invalid arguments"); // Only gets executed if the arguments don't match any overload
}
overloading("John");
overloading("John", 23);
