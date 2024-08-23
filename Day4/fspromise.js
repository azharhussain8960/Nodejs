let fs = require("fs/promises")

fs.writeFile("txt.txt","Hello I Am TxT").then(()=>{
    console.log("File Created")
}).catch(()=>{
    console.log("Error")
})

fs.appendFile("txt.txt"," How Are You?")
.then(()=>{
    console.log("Successfully Generated");
}).catch(()=>{
     console.log("Error Generated");
         
})
fs.readFile("txt.txt","utf-8").then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log("Error");
})
fs.unlink("txt.txt").then(()=>{
    console.log("File Deleted");
}).catch((err)=>{
    console.log("Error");
}).finally(()=>{
    console.log("hello");
    
})