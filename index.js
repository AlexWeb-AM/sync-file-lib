const { watchFile } = require('./watcher')
const { createClients } = require('./sender')
const { startServer } = require('./receiver')
const config = require('./sync.config.json')


function init() {
    const {files,peers,port} = config

    startServer(port)
    const {sendAll} = createClients(peers)

    files.forEach(file => {
        watchFile(file,(content) => {
            console.log('File changed:',file)
            sendAll({filePath:file,content})
        })
    })

}

init()

module.exports = {init}