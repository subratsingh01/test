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
    const text = req.params.text
    console.log(text)
})

// app.use('/v1', route);

app.listen(3000, () => console.log("listening on port 3000"))
