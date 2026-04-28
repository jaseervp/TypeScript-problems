
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

// enum StatusType{
//  PENDING,
//  SUCCESS,
//  FAILED
// }

// function getStatus(orderId:string ,status:StatusType){
//     console.log(orderId,"==",status);

// }
// getStatus("123344" ,StatusType.SUCCESS)



//as const

let name1="jaseer" //its reassigning possible 

let User="jaseer" as const // its dosent reassigning posible its read only 



//key of and type of 


// const StatusType={
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed"

// } as const 


// function getStatus (orderId:string,status:keyof typeof StatusType){

//   //StatusType.PENDING="hello"

//   console.log(orderId,"==" ,StatusType[status]);
  
// }
// getStatus("1234","PENDING")



//UTILITY Types


// type User={
//     name:string,
//     age:number,
// }

//read only
// const UserDetails :Readonly <User>={
//     name:"jaseer",
//     age:21
// }

//optional / paritial

// const UserDetails :Partial<User>={
//  name:"jaseer",
//  age:24
// }


//Required

// const UserDetails:Required<User>={
//     name:"jaseer",
//     age:21
// }


//pick

// const UserDetails:Pick<User,"name" >={
//     name:"jaseer",
// }

//omit

// const UserDetails:Omit<User,"age" >={
//     name:"jaseer"
//  }



// type StatusType="completed" | "pending" | "failed";

// const status : Exclude <StatusType  ,"pending" >="";



//Record

// type Food =Record<string,any>

// const food :Food ={
//     PIZZA:"chise",
//     CHICKEN:"fresh",
//     KFC:12
// }

//any/unknown/never/void/null


//any
let UserName :any="jaseer"

UserName.toFixed() //not getting error but its getting error in unknown type
 
//unknown

let UserName1:unknown="jaseer"
let newValue=UserName1 as string 

newValue.toUpperCase() //getting error if we use unknown type without type assertion

//never

function throwError(message:string):never{  //never type is used when the function never return any value or it always throw an error
    throw new Error(message)
}
throwError("This is an error")


// void
function logMessage(message:string):void{  //void type is used when the function dosent return any value
    console.log(message)
}       

//null
let UserName2:string|null="jaseer"
UserName2=null //its possible to assign null value to UserName2 because we have defined it as string or null type