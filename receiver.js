const WebSocket = require('ws')
const fs = require('fs')

function startServer(port) { 
    const wss = new WebSocket.Server({ port })

    wss.on('connection',ws => {
        ws.on('message',data => {
            const {filePath,content} = JSON.parse(data)
            fs.writeFileSync(filePath,content,'utf-8') 
            console.log('File updated:',filePath)
        })
    })

    console.log(`🛰️ Server ws://localhost:${port}`)

}


module.exports = {startServer}