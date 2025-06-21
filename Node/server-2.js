import http from  'node:http'

const server = http.createServer((req,res)=>{
// console.log(req.url)
const urlObject = new URL(req.url, `http://${req.headers.host}`)
console.log(req.headers)


// Set the response header (e.g., status 200 OK, content type HTML)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send a simple HTML response
  res.end('<h1>Hello from your Node.js server on Port 4000!</h1>');

  })

server.listen(4000, ()=>  console.log('Node Server is Running port 4000!'))


