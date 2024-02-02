import express from "express";
import cors from "cors";
import {
    createServer
  } from 'http';

const app = express();
const httpsers = createServer(app);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    // res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
  });
  
app.post('/insert', (req, res) => {
    const body = req.body;
    console.log(req.body)
    res.send(body);
});

httpsers.listen(8008, () => console.log('Server running at port '));