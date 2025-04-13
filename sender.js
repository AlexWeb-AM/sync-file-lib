const WebSocket = require('ws')

function createClients(peers) { 
    const sockets = peers.map(url => new WebSocket(url))

    return {
        sendAll:(data) => {
            sockets.forEach(ws => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data))
                }
            })
        }
        ,sockets
    }
}

module.exports = {createClients}