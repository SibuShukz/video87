import fs from "fs/promises"

let a = await fs.readFile("saurabh.txt")

let b =await fs.appendFile("saurabh.txt","\n\n\n he is smart boy ")
console.log(a.toString(),b)