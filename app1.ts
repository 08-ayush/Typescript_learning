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
  constructor(
    public name: string,
    public price: number,
    public color: string,
    public material: string
  ) {
  if(!color){
    this.color="transparent";
  }
}
  
}
let b1 = new BottleMaker("milton", 968, "", "metal");
let b2= new BottleMaker("cello", 1000, "red", "plastic");
b1.material="glass";


class Music{
     public name;
        public artist;
        public duration;
        public free;
        constructor(name:string, artist:string, duration:string ,free:string){
            this.name=name;
            this.artist=artist;
            this.duration=duration;
            this.free=free;
        }
 

}
let m1=new Music("song1","artist1","4:00","yes");



// access modifiers
//public readonly the value of the property cannot be changed


class bottleMaker{
    constructor(public name:string){
    
    }
    public nam:string="cello";
}

class MetalBottle extends bottleMaker{
    constructor(public name:string){
       super(name);
    }
    getValue(){
        console.log(this.name, this.nam);
        
    }
}
let t1=new MetalBottle("milton");
t1.getValue();



//getter and setter
//!without getter and setter
class User{
    constructor(public name:string, public age:number){
    }
    getName(){
        return this.name;
    }
    setName(val:string){
        this.name=val;
    }
}
 let u1= new User("John", 23);

 //with getter and setter
 class _User{
    constructor(public _name:string, public age:number){
    }
    get name(){
        return this._name;
    }

    set name(val:string){
        this._name=val;
    }    
 }

 let u2=new _User("Johni", 23);

 u2.name="Aayush";


 //functions

 function abcdr(name:string,age:number,cb:(arg:string)=>void){
     console.log(name,age);
     cb("hello");
 }

 abcdr("John",23,(arg:string)=>{
     console.log("callback");
     console.log(arg);
     
 })

  
 // Function overloading
function overloading(a: string): void;
function overloading(a: string, b: number): number;

function overloading(a: any, b?: any): any {
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

