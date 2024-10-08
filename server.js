const express = require ('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('Streaming-js-main'))
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({extended:true}))

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'Streaming-js-main/index.html'))
})
server.get('/cadastrar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Streaming-js-main/cadastrar.html'))
 })
 server.get('/editar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Streaming-js-main/editar.html'))
 })

server.listen(3000, () => {
    console.log("servidor no ar...")
})