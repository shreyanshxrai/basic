const express = require("express");

const app = express();
const cors = require("cors")
const port = 3000 ;
const rootrouter = require("./routes/server")

app.use(cors)

app.use(express.json())
app.use("/", rootrouter);


app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})