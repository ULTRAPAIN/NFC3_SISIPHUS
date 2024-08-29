import express from "express"; 

const app = express();
app.use(express.json());

app.get("/user",(req,res) => {
    res.status(404).send("Hello  form user ");
})

//web3 portions 
app.post("/web3/createDonor",(req,res) => {
    req.body

})

app.listen(3000,() => {
    console.log("backend started at port 3000");
})