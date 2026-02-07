import express from "express";
import cors from 'cors'
import text from './text.js'
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
    res.send(`<h1>listening</h1>`)
})

app.use('/v1', text);

app.listen(3000, () => console.log("listening on port 3000"))
