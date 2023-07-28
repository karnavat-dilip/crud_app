import express from 'express'
import cors from 'cors'
import db from './Model.js'
import router from './Routes/Route.js'
const app =express()

const PORT =process.env.PORT||4000
app.use(cors())
app.use(express.json())
app.use('/',router)

db.connect((err)=>{
    if(err) throw err;

    console.log("connected to db...");

})

app.listen(PORT,()=>{
    console.log("listning...");
})
