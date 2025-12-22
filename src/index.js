
import dotenv from "dotenv"


import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()



// const app = express()


// (async()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//     }catch(error){
//         console.log("database is not connencted")
//         throw err
//     }
// })