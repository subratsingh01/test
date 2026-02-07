import express from "express";
import cors from 'cors'
// import route from './text.js'
const app = express()

app.use(express.json())
app.use(
    cors({
      origin: "*",
      credentials: false,
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
);

app.get('/', (req, res) => {
    res.send("server is listening")
})

app.get("/text", (req, res) => {
    const text = req.params.data;
    console.log(data);
})

app.listen(3000, () => console.log("listening on port 3000"))
