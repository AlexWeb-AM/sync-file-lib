const chokidar = require('chokidar')
const fs = require('fs')

function watchFile(filePath,onChange) {
    chokidar.watch(filePath).on('change', () => {
        const content = fs.readFileSync(filePath, 'utf-8')
        onChange(content)
    })
    
}

module.exports = {watchFile}