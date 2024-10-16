var a = 12;
var b = 13;

//tuple

let x: [string, number] = ["hello", 12],
  y: [string, number] = ["world", 13];

//enum

enum UserRoles {
  ADMIN = "admin",
  USER = "user",
}


let z:number=12 ;
let z1: string = "12";

UserRoles.USER;
UserRoles.ADMIN;



//unknown
let aa:unknown;
aa = 12;
aa = "12";

if(typeof aa==="string"){
    aa.toUpperCase();
}

let h=12;

//Interface and type alias
//defining interface
//using interface to define object
//extending interface
//type alias
//intersection type

interface User {
  name: string;
  age: number;
  gender?: string;
}

// let user: User = {
//   name: "John",
//   age: 12,
// };
// console.log((user));


// function printUser(obj: User) {
  
// }

// printUser({name:"John",age:23,gender:"Male"});


interface Admin extends User {
  role: string;
}

function printAdmin(obj:Admin) {
    
} 

//printAdmin({name:"John",age:23,role:"admin"});



//type alias

type Person = {
    name: string;
  }
  function p(obj:Person){
    obj.name="John";
  }
  type digit= {x:Number ;
     y: string; 
    };

  function printPerson(person: digit) {
    // person="Aayush";
    // person=12;
    person.x = 12;
    person.y = "Aayush";
  } 

  printPerson({x:45,y:"arush"});

//union type
const data1: number[]= [1,2,3,4,5];
const data2: string[]= ["a","b","c"];
const data3: (number|string)[]=[1,2,3,"a","b","c"];
  // intersection type

  type User1={
    name: string;
    age: number;
  }

  type admin=User1 &{
    getDetails(user:string,id:Number):void;
  }

  function abcd(ob:admin){
    ob.getDetails("John",12);
  }


  //! Interface and intersection are like same  but some key differnce is there

  //1
  // type number1=number;
  // type number1=number;
  //! differnce duplicate type is not allowed in intersection
  //but in interface we can merge the interface


  //object ki shape bnana ho to we use interface
