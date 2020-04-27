const app = require('./app')
const notesServer = require('./grpc/notes/server')

app.listen(8080, () => {
  console.log(`App running on port: 8080`)
})

notesServer.start()
console.log('Server running at http://localhost:50051')