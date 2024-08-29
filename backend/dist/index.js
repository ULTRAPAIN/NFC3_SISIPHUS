import express from "express";
const app = express();
app.get("/user", (req, res) => {
    res.status(404).send("Hello  form user ");
});
app.listen(3000, () => {
    console.log("backend started at port 3000");
});
