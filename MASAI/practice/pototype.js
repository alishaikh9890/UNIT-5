// var son ={
//     father:"krishan",
//     myfather(){
//         console.log(this.father)
//     }
// }
// son.myfather()



// function person(n,a){
//     this.name=n
//     this.age=a
// }

// var person1 = new person("raj",23)
// console.log(person1)
 

// const cat ={
//     legs: 4,
//     tail: true,
//     claws: "sharp",
//     whiskers: true
// }

// const Tiger ={
//     legs: 4,
//     tail: true,
//     claws: "sharp",
//     whiskers: true,
//     speed: 60,
//     color: "orange",
//     height: "5ft",
//     climb: true
// // }

// const Tiger = Object.create(cat   /* what should be the prototype */)
// Tiger.color="orange";
// Tiger.speed = 60;
// Tiger.height="5 ft";
// Tiger.climb=true


// console.log(Tiger)
// console.log(Tiger.legs)
// console.log(Tiger.claws)

// let scooter ={
//     wheels: 2,
//     seater: 2,
//     engine: 1,
//     headLight: 1
// };

// let vespa =Object.create(scooter);
// vespa.scootername= "vespa";
// vespa.color= "teal"
// console.log(vespa)

// let activa =Object.create(vespa);

// activa.scootername="activa";
// activa.color="white"

// console.log(activa)


// function Newspaper(headlines){
//     this.date = new Date();
//     this.name = "The Hindu";
//     this.headlines = headlines;
// }

// Newspaper.prototype.ad = function(){
//     console.log("Sale at Myntra")  
// }

// let n1 = new Newspaper("lorem ipsum dolor in hendre");

// console.log(n1)

// let newspaper ={
//     date:"12-02-2022",
//     name: "the Hindu",
//     headlines: "some random headline - lorem"
// }

// let arr1 = new Array (1,2,3);
// console.log(typeof arr1);


// let str1 = new String("masai");

// let temp = str1.split("s")
// console.log(temp)


// let str2 ="school";

// let temp1 =str2.split("h");
// console.log(temp1)


// function MyArray(){
//     Object.defineProperty(this, "length", {
//         enumerable: false,
//         writable:true
//     });

//     for(let i=0; i<arguments.length; i++){
//         this[i] = arguments.length; 
//     }
//     this.length = arguments.length
// }


// MyArray.prototype.myPush = function (el){}
// /* 
// [
//     0 : 1,
//     1 : 2,
//     3 : 3

// ]
// */
// let arr2 = new MyArray(101,102,103,104,105);

// console.log(arr2)


// function Newspaper(headlines){
//     this.date=new Date()
//     this.name="The Hindu"
//     this.headlines=headlines
// }

// Newspaper.prototype.ad = function(){
//     console.log("sale at mintra")
// }

// let n1 = new Newspaper("lorem ipsum dollar in hedre")

// console.log(n1)

// let arr1 =new Array(1,2,3)

// console.log(arr1)

// let str1 = new String("masai")

// let temp=str1.split("s")

// console.log(temp)

// let str2 = "school"

// str2.split("h")
// console.log(str2)

// let arr1 = [1,2,3,4,5]
// arr1.push(6)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)

// function myArray(){
//     console.log(arguments)
// }

// let arr2 = new myArray(101,102,103,104,105)

// console.log(1)
// var count=1
// let x=setInterval(function(){
//     console.log("First setTimeout")
//     count++;
//     if(count===3){
//     console.log("clear thetimer now")
//     clearInterval(x)}
// },3000)



// console.log(3)


let display = document.getElementById("counterDisplay");

function counter(){
 let i= 10;
 let id=setInterval(function(){
    i=i-1;
    display.textContent=i
    if(i===1){
        clearInterval(id)
     }
 },1000)

}

counter()