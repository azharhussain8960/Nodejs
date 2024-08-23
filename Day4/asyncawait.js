let fs = require("fs/promises")

  let func1 = async()=>{
   await fs.writeFile("demo.txt","Hello, Make By Async And Await") 
   console.log("success");
   
  }
  func1()