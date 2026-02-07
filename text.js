import express from "express";

const route = express()

let arr = [];

export const text = ('/text', (req, res) => {
    const data = req.param.text
    console.log(data)

}) 