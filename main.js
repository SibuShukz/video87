 const fs= require("fs")

 //console.log(fs)

 console.log("starting")
 //fs.writeFileSync("saurabh.txt","saurabh is a good boy")

 fs.writeFile("saurabh2.txt","saurabh2 is a good boy",()=>{
    console.log("done")
    fs.readFile("saurabh2.txt",(error,data)=>{
        console.log(error,data.toString())
    } )
 })

 fs.appendFile("saurabh2.txt"," and smart", (e,d)=>{
    console.log(d)
 })

 
 console.log("ending")  //ending will be printed before done because writeFile is asynchronous      
 