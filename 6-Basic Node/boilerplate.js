const fs = require('fs')
const foldername = process.argv[2] || 'project'
directory = process.cwd()
fs.mkdirSync(`${directory}/${foldername}`)

fs.writeFileSync(`${foldername}/index.html`,'')
fs.writeFileSync(`${foldername}/style.css`,'')
fs.writeFileSync(`${foldername}/script.js`,'')