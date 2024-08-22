let fs = require('fs')

// //to create the new file with the fs 
// fs.writeFileSync("text.txt","Hello How Are Yoy?")

// // to updating the created file
// fs.appendFileSync("text.txt","My Name IS Azhar Hussain")

// // to read the file data
// let data = fs.readFileSync("text.txt","utf-8")
// console.log(data);

// //to delete the created file
// fs.unlinkSync("text.txt")

// fs.writeFileSync("hello.html",`!`)

//  File Creation With Asynchronous Method

fs.writeFile("demo.txt","Hello What Is Your Name? ",(err)=>{
    if(err){
        console.log(`Error Generated of  ${err}`);
    }else{
        console.log(`File Created Successfully`);
    }
})

fs.appendFile("demo.txt"," Is It Azhar Hussain?",(err)=>{
    if(err){
        console.log(`Some Error ${err}`);
    }else{
        console.log(`File Updated Successfully`);
        
    }
})

fs.readFile("demo.txt",(err,data)=>{
         if(err){
            console.log(`${err}`);
            
         }else{
            console.log(`Success ${data}`);
            
         }
}) 
fs.unlink("demo.txt",(err)=>{
    if(err){
        console.log(`${err}`);
    }else{
        console.log(`Successfully Deeleted`);
        
    }
})

