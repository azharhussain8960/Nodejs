// var dns = require('dns');
// var w3 = dns.lookup('www.instagram.com', function (err, addresses, family) {
//   console.log(addresses);
// });


// let dns =require('dns');

// dns.lookup("www.tekisky.com",(err,address,family)=>{
//     console.log(err);
//     console.log(address);
//     console.log(family);

// })

// dns.lookup("www.google.com,",(err,address,family)=>{
//     console.log(err);
//     console.log(address);
//     console.log(family);
    
// })

let display = (msg)=>{
    console.log(msg);
}
// display("Hello, World!");

let add=(x,y,test)=>{
    let result = x+y
    test(result)
}



add(2,2,(msg)=>{
    console.log(msg);
    console.log("good morning");
})

