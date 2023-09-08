const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to G20 Summit, India')
    }
    if(req.url === '/about') {
        res.end('To discuss international peroblems and solutions')
    } else {
        res.end('Page not found')
    }
})

server.listen(5000)