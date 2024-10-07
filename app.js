"use strict";
var a = 12;
var b = 13;
//tuple
let x = ["hello", 12], y = ["world", 13];
//enum
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));
let z = 12;
let z1 = "12";
UserRoles.USER;
UserRoles.ADMIN;
//unknown
let aa;
aa = 12;
aa = "12";
if (typeof aa === "string") {
    aa.toUpperCase();
}
let h = 12;
function printAdmin(obj) {
}
function p(obj) {
    obj.name = "John";
}
function printPerson(person) {
    person = "Aayush";
    person = 12;
}
function abcd(ob) {
    ob.getDetails("John", 12);
}
//! Interface and intersection are like same  but some key differnce is there
//1
// type number1=number;
// type number1=number;
//! differnce duplicate type is not allowed in intersection
//but in interface we can merge the interface
//object ki shape bnana ho to we use interface
