import http from 'node:http';
import {getData} from './database/data.js';

const port = 8000;
const server = http.createServer((req, res)=>{
    const data = getData()
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
})

server.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})