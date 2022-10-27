// let myPromise = new Promise(function(resolve, reject){
//     isFullfilled= false;
    
//     if(isFullfilled){
//         resolve("Pomise resolved")
//     }else {
//         reject("Promise rejected")
//     }
// })

// myPromise.then(function(resp){
//     console.log(resp)
// })

// myPromise.catch(function(err){
//     console.log(err)
// })



let examStatus = true;

let parentsPromise = new Promise(function(resolve, reject){
    setInterval(function(){
        if(examStatus==true){
            resolve("Play station")
        }else {
            reject("flying chapal")
        }
    },3000)
});



parentsPromise.then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error)
})



// promise taken in anonymous function, this anonymous function has two 
// auguments : resolve and reject

// if its successfull we shall pass it via resolve;
// if its failure we shall pass it via reject;

// then -->  successful -->
// catch --->  failure ---