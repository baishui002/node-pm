const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let data = {
      code: 0,
      msg: 'success2'
    }
    res.end(JSON.stringify(data))
  })
  .listen(3002)

console.log('http server is listening at port 3001.')

