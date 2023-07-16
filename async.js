setTimeout(function() {
    console.log("Hello");
});

function demo() {
    console.log("Hello2");
};

demo()

const demo2 = () => {
    console.log("Hello3");
}

demo2();


console.log("Hello4");


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
);