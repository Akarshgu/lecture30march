// let promiseA=new Promise((resolve,reject)=>{
//     resolve('A');
// })
// console.log('me first');
// setTimeout(()=>{              // callbackque comes at last after the microtask queue
//     console.log('timeout');
// },0)
// promiseA.then((result)=>{    //microtask quee has more priority then callback que.

//     console.log('me 2nd');
// })
// console.log('me 3rd');



let promiseA=new Promise((res,rej)=>{
    setTimeout(()=>{
res('A')
    },2000)
})
let promiseB=new Promise((res,rej)=>{
    setTimeout(()=>{
res('B')
    },2000)
})


// to make in a sync. then 
// console.log('me1st');
// promiseA.then((data)=>{
//     console.log(data);
// })
// console.log('before b');
// promiseB.then((data)=>{
//     console.log(data);
// })
// console.log('me last')

// // then it is in queuq.
// console.log('me1st');
// promiseA.then((data)=>{
//     console.log(data);
//     console.log('before b');
// })

// promiseB.then((data)=>{
//     console.log(data);
//     console.log('me last')
// })


// function printletter(letter) {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log(letter);
//             res(letter)
//         }, 2000);
//     })
// }
// make that letter remove in above we can remove it by giving await to a 
// a variable like below
// async function printalphavbets() {
//     await printletter('A')
//     console.log('before b');
//     await printletter('B')
//     console.log('c is resolved');
//     await printletter('C')
//     console.log('end');
// }


// function printletter(letter) {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
          
//             res(letter)
//         }, 2000);
//     })
// }

// async function printalphavbets() {
//   var aa=  await printletter('A')
//   console.log(aa);
//     console.log('before b');
//     var bb=  await printletter('B')
// console.log(bb);
//     console.log('c is resolved');
//  var  cc =  await printletter('C')
//  console.log(cc);
//     console.log('end');
// }


// // problem other 
// console.log('first');
// let pr = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res('second')
//     }, 2000);
// })
// // pr.then((data)=>{
// //     console.log(data);
// //     console.log('3rd');
// // })

// // convert by async await
// async function lett() {
//     let a=await pr;
//     console.log(a) ;
//     console.log('3rd');
// }
// lett();

// //  //------prototype
// let animal={
//     eats:true,            // covering same obj in another variable
//     moves:true,
//     walks:function () {
       
// console.log('i walk')
//     }
// }
// let rabit={
//     jumps:true,
//     // eats:true,         //these are repeating in both so we can do 
//     // moves:true        // then we can remove these two and giv \e in another variable 

// }
// let mouse={
//     hastail:true,            // these two are repeating then we can cover this in another variable 
//     // eats:true,
//     // moves:true
// }
// rabit.__proto__=animal;  // rabut inherts animal object as if anything is repeted
//                           // then we can cover in anpother var obj then giuve like this
// console.log(rabit.eats);
// rabit.walks();
// console.log('rabit',rabit);
// console.log('mouse',mouse);

// console.log(rabit.moves); // inherited property
// console.log(rabit.jumps); // own property


// hasOwnProperty returns bollean values

// console.log(rabit.hasOwnProperty('moves'));  // inherited keys will give false
// console.log(rabit.hasOwnProperty('jumps')); 

// let keys = Object.keys(rabit);
// console.log(keys);  // obj dont give inheruted property

// for in loop --gives both property
// rabit.__proto__ = animal 
// for(let  key in rabit){
//     if(rabit.hasOwnProperty(key)){
//         console.log(key,'own property');
//     } else {
//     console.log(key ,'inherited');
//     }
// }


// -------constructor functions
// they are just like regular funcitons. There 2 conventions :
// 1. They are named with a capital first letter
// 2. They should be called only with the "new" keyword

// // constructor function returns an object

// function User(name) {
//     // this = {} (implicit)
//     this.firstName = name
//     this.isAdmin = true
//     // return this (implicit)
// }

// let result = new User('Rahul')

// console.log(result)

// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// function Rabit(name) {
//     this.petName = name
//     this.jumps = true
// }

// Rabit.prototype = animal //The objects that will be created by Rabbit constructor function will inherit from animal object
// let rabbit = new Rabit('Tom')
// console.log(rabbit)