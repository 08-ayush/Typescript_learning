"use strict";
// //generic function
// function generics<T>(a: T, b: string, c: number){
//     generics<string>("John", "Doe", 23);
//    // generics<number>(23, "Doe", 23);
//     console.log(a,b,c);
// }
// generics("arush", "Doe", 23);
// // Generic interface
// interface genInterface<T> {
//     name: string;  // Use lowercase 'string'
//     age: number;
//     keys: T;
// }
// function xyz(obj: genInterface<number>) {
//     console.log(obj);
// }
// xyz({ name: "John", age: 23, keys: 12 });
//generic class
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("Pratek");
let b2 = new BottleMaker(23);
console.log(b1, b2);
function abcd(a, b) {
    return "Hello";
}
abcd("ak", "oberoi");
//tyep assertion ka matlab ts ko ki particular cheez ka type kya hai, ye hum khud bata rahe hain
let a = 12;
//(a as number).
//!or
// (<number>a).
//type casting
let m = Number("12");
console.log(m);
//Non null asserton operator
//  let n: string | null | undefined;
//     n="Hello";
//     n!.
