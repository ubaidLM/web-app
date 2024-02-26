import express from "express";
import dbconnect from "./db/dbConnection.js";
import router from "./router.js/userRouter.js";
import cors from 'cors'
const app = express();
const PORT = 8000;
app.use(express.json())
app.use(cors());
dbconnect();

app.use('/user',router)

// app.get('/',(rew,res)=>{
//     res.send('welcome to the browser')
// })

app.listen(PORT,()=>{
    console.log(`your server is o running on http://localhost:${PORT}`);
})