
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

class BottleMaker<T>{
    constructor(public key :T){

    }
}
let b1=new BottleMaker<string>("Pratek");
let b2=new BottleMaker<number>(23);
console.log(b1,b2);



function abcd<T>(a: T, b:T): T{
    return <T>"Hello";
}

abcd<string>("ak", "oberoi");