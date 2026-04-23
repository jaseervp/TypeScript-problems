"use strict";
// infer types (Implicit Types)
// let Username="jaseer"
// let Age=21
// Age="hy"  //not allwoed 
// Definig Types (Explicit Type)
// let Username:string="jaseer"
// let age :number=21
// let skills:string[]=["JS","NODE.JS","MONGODB"]  //array
// let UserDetails:{name:string;age:number}={  //object
// name:"jaseer",
// age:20
// }
//interface
// interface Details{
//     name:string;
//     age:number;
//     salary:number
//     getName:()=>void;
// }
// let UserDetails:Details={
//     name:"jaseer",
//     age:21,
//     salary:50000,
//     getName() {
//         console.log(this.name)
//     },
// }
//type
// type Details={
//     name:string,
//     age:number,
//     salary:number
//     getName:()=>void
// }
// let UserDetails:Details={
//     name:"jaseel",
//     age:22,
//     salary:50000,
//     getName() {
//         console.log(this.name)
//     },
// }
//union operator
// let skills:string[]=["JS","NODE.JS","MONGODB"]
// let skills:(string|number)[]=["JS","NODE.JS","MONGODB",2,23] //union operator
// type Details={
//     name:string,
//     age:number|string,  //union operator 
//     salary:number
//     getName:()=>void
// }
// let UserDetails:Details={
//     name:"jaseel",
//     age:22,
//     salary:50000,
//     getName() {
//         console.log(this.name)
//     },
// }
//optional operator  
// type Details={
//     name:string,
//     age:number|string,   
//     salary ?:number //if in case salary dosent use its not geting error using this ? opertor
//     getName:()=>void
// }
// let UserDetails:Details={
//     name:"jaseel",
//     age:22,
//     getName() {
//         console.log(this.name)
//     },
// }
//functions
// type Details={
//     name:string;
//     age:number |string;
//     salary?:number;
//     getName:()=>void
// }
// let UserDetails:Details={
//     name:"jaseer",
//     age:21,
//     salary:50000,
//     getName(){
//         console.log(this.name)
//     }
// }
// function getUser(UserDetails:Details){
//    return UserDetails.name
// }
// getUser(UserDetails)
// Named types
// type Status="pending" | "completed" | "failed";
// let CurrentStatus:Status="completed"
// type ToggleSwitch = "on"| "off"
// let CurrentSwitch:ToggleSwitch="on"
// function overloading
// function add (num1:number|string, num2:number|string):number|string{
//     if (typeof num1 ==="string"|| typeof num2==="string"){
//         return num1 +""+ num2 
//     }
//     return num1+num2
// }
// add(1,2)
// add("1","2")
// function add1 (num1:string, num2:string):string
// function add1 (num1:number,num2:number):number
// function add1 (num1:any ,num2:any):any {
//     return num1+num2
// }
//Generics
// function getAge<T>(age:T):T{
//     return age 
// }
// getAge("40")
// getAge(20)
//example Generics
// type AdminDetails={
//     Name:string;
//     Role:string;
// }
// type UserDetails={   simplyfy this into this
//     FirstName:string;
//     Age:number
// }
// let adminDetails:AdminDetails={
//     Name:"jaseer",
//     Role:"admin"
// }
// let userDetails:UserDetails={
//     Name:"rinshad",
//     Role:"User",
//     Age:15
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// let Uservalue=getDetails(userDetails)
// let Adminvalue=getDetails(adminDetails)
//Extending  interface
// interface AdminDetails {
//     name:string,
//     age:number
// }
// interface UserDetails extends AdminDetails {
//     Role:string
// }
// //Extending type 
// type Admin ={
//     name:string,
//     age: number
// }
// type User= Admin &{
//  Role:string
// }
//Enums
// type StatusType="Pending" |"Success" |"Failed"
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 0] = "PENDING";
    StatusType[StatusType["SUCCESS"] = 1] = "SUCCESS";
    StatusType[StatusType["FAILED"] = 2] = "FAILED";
})(StatusType || (StatusType = {}));
function getStatus(orderId, status) {
    console.log(orderId, "==", status);
}
getStatus("123344", StatusType.SUCCESS);
