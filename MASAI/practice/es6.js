// function person(n,a){
//     this.name=n;
//     this.age=a;
// }

// const pers1 = new person("raj",24)

// console.log(pers1)


// let fname = "masai";
// let lname = "school";

// let num1 = 50;
// let num2 =20;

// let sum = `${num1+ num2} is the sum`

// let str =
// `${fname} ${lname} is the best for the modenrt `

// console.log(sum)




//// object and array distructuring
/// rest, spread operators

// object

// var person = {}

// person.name ="masai"
// person.id= "50"
// person.location = "INDIA"

// function getData(){
//     return person
// }

// const { name: fname } = getData()

//  console.log(fname)

 // Arrays

//  const arr =["Masai", "INdia", "Bangalore"]

// //  const name = arr[0];
// //  const country= arr[1]
// const [name, country] = arr

//  console.log(name, country)


//  const str = `first_lane
//  second_lane`

//  const [ fLine , sLine] = str.split("\n")

//  console.log(fLine, sLine)


// function fetchData({baseUrl, quary, pageNo}){
//     // xhr call
//     console.log(baseUrl, quary, pageNo)
// }

// const data={
//     baseUrl:"url",
//     quary:"masai",
//     pageNo:3
// }

// fetchData(data)




//// Defoult Values /////

function sum(math=0, english=0, science=0){

   
    return math+english+science
}

let total = sum(40)

console.log(total)