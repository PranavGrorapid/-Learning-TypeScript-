//  1)  creating string variable using typescript
// let userName:string="pranav"
// console.log(userName)
// 2) write a function which receives a number and  returns a number
// function returnNumber(x:number):number{
//     return x
// }
// console.log(returnNumber(23))
//3) write a fn which converts text to uppercase.
// function makeUpperCase(data:string):string{
//     return  data.toUpperCase()
// }
// console.log(makeUpperCase('hello'))
// (4) write a fn which accepts 3 parameters of 3 different data types
// function signupUser(name:string,age:number,isPaid:boolean):string{
//  if(name && age && isPaid===true){
//     return "signup successfull"
//  }
//  return "signup failed"
// }
// console.log(signupUser('pro',23,true))
// (5) write a fn which uses default parameter
// function LoginUser(email:string,password:string,isPaid:boolean=true):string{
//     if(email && password && isPaid===true){
//             return "login successfull"
//          }
//          return "login failed"
// }
// console.log(LoginUser('pro@gmail.com','xcxxx'))
// (6) Arrow functions in typescript
// const getUserDetails=(name:string,email:string,isAdmin:boolean,age:number):string=>{
//     return `your name is ${name}`
// }
// console.log(getUserDetails('pranav',"pranav@gmail.com",true,23))
//// (7) type in map function
// const arr=[4,5,6,7,8]
// const numbers=arr.map((x:number)=>{
//     return x*4
// })
// console.log(numbers)
// (8) never and void datatypes
// function consoleValues(a:string,b:number):void{
//     console.log(a+b)
// }
// consoleValues('10',30)
// function ThrowErr(a:string,b:number):never{
//     throw new Error('not found')
// }
// ThrowErr('10',30)
//functional constructor
//- (9) object returning object
//    function getUserDetails({name,age,isAdmin}:{name:string,age:number,isAdmin:boolean}):{name:string,age:number}{
//      return {name:name ,age:age}
//    }
//    getUserDetails({name:'pro',age:23,isAdmin:false})
//AliAses in Ts
//  (10) CREATE A USER OF TYPE ALIASES
//    type USERS={
//      readonly _id:string,
//      name:string,
//      age:number,
//      isAdmin:boolean
//      isPaid?:boolean
//    }
//    let user1:USERS={
//       _id:'67880',
//       name:'PRO',
//      age:23,
//      isAdmin:false
//    }
//    user1.name="pranav"
//    console.log('user1',user1)
//UNION IN TS
// (11) create a variable that might be a string or number
//  let userId:string|number;
//    userId='uio'
//    userId=789
// (12) create a user he might be of type USER | ADMIN
//   type USER={
//     username:string,
//     isAdmin:boolean
//   }
//   type Admin={
//     name:string,
//     isAdmin:boolean
//   }
//   let user1:USER | Admin ={name:'abhi',isAdmin:true}
//    user1 ={name:'abhin',isAdmin:true}
//    user1 ={username:'abhin',isAdmin:true}
// (13) create a function that takes string or number as parameter
// function getDetails(data:number | string | boolean):void{
//   console.log(data)
// }
// getDetails('hello')
// getDetails(123)
// getDetails(true)
//(14) create a variable that takes 3  aliases eg:-aeroplane
// let Seat:'ariel' | 'window' | 'side'
// Seat ='window'
//ARRAYS
// create 2 Array of type number and string
// let Arr1:number[] | string[]
// Arr1=[89,90,76,56,43]
// console.log("1",Arr1)
// Arr1=['tgv','abc','cde','vfe'] 
// console.log("2",Arr1)
//CREATE AN ARRAY THAT MIGHT BE OF TYPE STRING OR NUMBER
// const myArr :(string | number)[]=['yug',899,'jhjhj',89]
// TUPLES
// CREATE An array where first value is STRING second is NUMBER and third is BOOLEAN
// let  myArrays:[string,number,boolean]
// myArrays=['hel',78,false]
// create a TYPE where the first value is NUMBER and second value is BOOLEAN
// type DOCTORS=[
//     fees:number,
//     isDoctor:boolean
// ]
// let doctor1 :DOCTORS=[233,false]
// let doctor2 :DOCTORS=[344,false]
// INTERFACE
// create a INTERFACE STUDENT Details which gives email and name also add READ-ONLY AND OPTION in it 
// --1) add another interface suppose student is coming from git hub and i need to add an extra field to it called github token
// --2) interface can be inherited
//   interface STUDENT {
//         readonly _id:number
//         email:string,
//         name:string,
//         isCriminal?:boolean
//         getFeesDetails(num:number):string
//   }
//   interface  STUDENT{
//      githubToken:string
//   }
//   interface ADMIN extends STUDENT{
//     role:'Admin' | 'USER' | 'DOCTOR'
//   }
//   const s1:ADMIN={_id:90,email:'h@h.com',role:'DOCTOR',name:'pro',githubToken:'123',getFeesDetails(num:10){
//     return 'fees paid'
//   }}
//   const s2:STUDENT={_id:78,email:'p@p.com',githubToken:'12983',name:'pranav',getFeesDetails(num:200) {
//       return 'paid'
//   },}
// PUBLIC , PRIVATE
// -- create a class USER create  2 objects. it should take 2 parameters which should be number and boolean
//GETTERS AND SETTERS 
// ---create a private variable  and use Getter to get value and use SETTER to update the value
var USER = /** @class */ (function () {
    function USER(id, isPaid) {
        this.id = id;
        this.isPaid = isPaid;
        this.isDoctor = true;
        this.id = id,
            this.isPaid = isPaid;
    }
    Object.defineProperty(USER.prototype, "getIsDoctor", {
        get: function () {
            return this.isDoctor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USER.prototype, "setIsDoctor", {
        set: function (val) {
            this.isDoctor = val;
        },
        enumerable: false,
        configurable: true
    });
    return USER;
}());
var user1 = new USER(678, true);
console.log(user1.id);
user1.setIsDoctor(true);
console.log(user1.getIsDoctor); // we get error
// GETTERS AND SETTERS IN TS
