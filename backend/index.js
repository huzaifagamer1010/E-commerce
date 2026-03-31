const express = require('express');
const cors =require('cors')
const port = 5000


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('Server is running and This is Home Page')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

